import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './ui/IconSymbol';

type WorkoutCardProps = {
  title: string;
  duration: string;
  difficulty: string;
  exercises: number;
};

export function WorkoutCard({ title, duration, difficulty, exercises }: WorkoutCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <ThemedView style={styles.details}>
          <ThemedView style={styles.detail}>
            <IconSymbol name="clock.fill" size={16} color="#666" />
            <ThemedText>{duration}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.detail}>
            <IconSymbol name="gauge.fill" size={16} color="#666" />
            <ThemedText>{difficulty}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.detail}>
            <IconSymbol name="list.bullet" size={16} color="#666" />
            <ThemedText>{exercises} exercises</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  details: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 16,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
}); 