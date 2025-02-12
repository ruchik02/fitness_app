import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useSegments } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isReady, setIsReady] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        // Check if user has seen onboarding
        const value = await AsyncStorage.getItem('hasSeenOnboarding');
        setHasSeenOnboarding(!!value);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (!isReady) return;

    // If hasSeenOnboarding is false and we're not on the onboarding screen,
    // redirect to onboarding
    if (hasSeenOnboarding === false && segments[0] !== 'onboarding') {
      router.replace('/onboarding');
    }
    // If hasSeenOnboarding is true and we're on the onboarding screen,
    // redirect to main app
    else if (hasSeenOnboarding === true && segments[0] === 'onboarding') {
      router.replace('/(tabs)');
    }
  }, [isReady, hasSeenOnboarding, segments]);

  if (!loaded || !isReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="onboarding" 
          options={{ 
            animation: 'fade',
            presentation: 'fullScreenModal',
            // Prevent going back to onboarding
            gestureEnabled: false,
          }} 
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            animation: 'fade',
            // Prevent going back to onboarding
            gestureEnabled: false,
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
