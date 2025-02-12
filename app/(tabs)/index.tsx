import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { WorkoutCard } from '@/components/WorkoutCard';
import { StatsRow } from '@/components/StatsRow';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ThemedText style={styles.welcomeText}>Welcome back, John!</ThemedText>
      }>
      <ThemedView style={styles.container}>
        <StatsRow />
        
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Today's Workout</ThemedText>
          <WorkoutCard
            title="Full Body Strength"
            duration="45 min"
            difficulty="Intermediate"
            exercises={8}
          />
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Recent Workouts</ThemedText>
          <WorkoutCard
            title="Upper Body Focus"
            duration="30 min"
            difficulty="Beginner"
            exercises={6}
          />
          <WorkoutCard
            title="Core Strength"
            duration="20 min"
            difficulty="Advanced"
            exercises={5}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  section: {
    gap: 12,
  },
});
