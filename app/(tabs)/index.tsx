import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { WorkoutCard } from '@/components/WorkoutCard';
import { StatsRow } from '@/components/StatsRow';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ParallaxScrollView
      headerMinHeight={200}
      headerMaxHeight={280}
      extraScrollHeight={20}
      navbarColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      renderHeader={() => (
        <ThemedView style={[styles.header, { paddingTop: insets.top + 20 }]}>
          <ThemedText style={styles.welcomeText}>Welcome back,</ThemedText>
          <ThemedText style={styles.nameText}>John!</ThemedText>
        </ThemedView>
      )}>
      <ThemedView style={styles.container}>
        <StatsRow />
        
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Today's Workout</ThemedText>
          <WorkoutCard
            title="Full Body Strength"
            duration="45 min"
            difficulty="Intermediate"
            exercises={8}
            // image={require('@/assets/images/workouts/full-body.jpg')}
          />
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Recent Workouts</ThemedText>
          <WorkoutCard
            title="Upper Body Focus"
            duration="30 min"
            difficulty="Beginner"
            exercises={6}
            // image={require('@/assets/images/workouts/upper-body.jpg')}
          />
          <WorkoutCard
            title="Core Strength"
            duration="20 min"
            difficulty="Advanced"
            exercises={5}
            // image={require('@/assets/images/workouts/core.jpg')}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 16,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
  },
  nameText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 4,
  },
});
