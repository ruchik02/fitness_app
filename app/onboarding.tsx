import { useRouter } from 'expo-router';
import { StyleSheet, View, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import { Button } from '@/components/ui/Button';
import { OnboardingProvider, useOnboarding } from '@/contexts/OnboardingContext';

// Create an image mapping object
const ONBOARDING_IMAGES = {
  // Step 1 images
  dumbbell: require('@/assets/images/dumbell.png'),
  protein: require('@/assets/images/dumbell.png'),
  timer: require('@/assets/images/dumbell.png'),
  gripper: require('@/assets/images/dumbell.png'),
  // Step 2 images
  chart: require('@/assets/images/dumbell.png'),
  medal: require('@/assets/images/dumbell.png'),
  target: require('@/assets/images/dumbell.png'),
  trophy: require('@/assets/images/dumbell.png'),
  // Step 3 images
  community: require('@/assets/images/dumbell.png'),
  chat: require('@/assets/images/dumbell.png'),
  heart: require('@/assets/images/dumbell.png'),
  star: require('@/assets/images/dumbell.png'),
};

const ONBOARDING_STEPS = [
  {
    title: 'Waffles are just\npancakes with abs',
    description: 'Our recipes and workouts are the perfect way to start your day. Sweat hard, then have a snack or drink. Whatever you prefer!',
    images: ['dumbell', 'protein', 'timer', 'gripper'],
  },
  {
    title: 'Track Your Progress\nStay Motivated',
    description: 'Monitor your workouts, set goals, and celebrate your achievements. Every step counts towards your fitness journey.',
    images: ['chart', 'medal', 'target', 'trophy'],
  },
  {
    title: 'Join Our Fitness\nCommunity',
    description: 'Connect with like-minded people, share your progress, and get inspired by others on the same path.',
    images: ['community', 'chat', 'heart', 'star'],
  },
];

function OnboardingContent() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { currentStep, nextStep } = useOnboarding();

  const handleNext = async () => {
    if (currentStep === ONBOARDING_STEPS.length - 1) {
      try {
        await AsyncStorage.setItem('hasSeenOnboarding', 'true');
        router.replace('/(tabs)');
      } catch (e) {
        console.error('Error saving onboarding status:', e);
      }
    } else {
      nextStep();
    }
  };

  const step = ONBOARDING_STEPS[currentStep];
  const progress = (currentStep + 1) / ONBOARDING_STEPS.length;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <ThemedText style={styles.logo}>EXERGIZE</ThemedText>
      </View>

      <View style={styles.imageContainer}>
        {step.images.map((image, index) => (
          <Image
            key={image}
            source={ONBOARDING_IMAGES[image as keyof typeof ONBOARDING_IMAGES]}
            style={[
              styles.image,
              index === 0 && styles.image1,
              index === 1 && styles.image2,
              index === 2 && styles.image3,
              index === 3 && styles.image4,
            ]}
          />
        ))}
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dot2]} />
      </View>

      <LinearGradient
        colors={['transparent', '#fff']}
        style={[styles.content, { paddingBottom: insets.bottom }]}>
        <ThemedText style={styles.title}>
          {step.title}
        </ThemedText>
        
        <ThemedText style={styles.description}>
          {step.description}
        </ThemedText>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>

        <Button 
          style={styles.button}
          onPress={handleNext}
        >
          {currentStep === ONBOARDING_STEPS.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </LinearGradient>

      {currentStep < ONBOARDING_STEPS.length - 1 && (
        <Button 
          style={styles.skipButton}
          variant="text"
          onPress={() => router.replace('/(tabs)')}
        >
          Skip
        </Button>
      )}
    </View>
  );
}

export default function OnboardingScreen() {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', // Light purple background
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32CD32', // Bright green color for logo
    textShadow: '2px 2px rgba(0,0,0,0.1)',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
  image1: {
    top: '25%',
    left: '20%',
  },
  image2: {
    top: '30%',
    right: '20%',
  },
  image3: {
    bottom: '35%',
    left: '15%',
  },
  image4: {
    right: '25%',
    bottom: '20%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#32CD32',
    position: 'absolute',
    top: '40%',
    right: '40%',
  },
  dot2: {
    top: '60%',
    left: '35%',
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    lineHeight: 24,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginBottom: 32,
  },
  progressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#32CD32',
    borderRadius: 2,
  },
  button: {
    backgroundColor: '#1a1a1a',
    borderRadius: 30,
    paddingVertical: 16,
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
}); 