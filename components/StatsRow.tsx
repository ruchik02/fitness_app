import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export function StatsRow() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.stat}>
        <ThemedText type="defaultSemiBold">2,453</ThemedText>
        <ThemedText>Steps</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stat}>
        <ThemedText type="defaultSemiBold">320</ThemedText>
        <ThemedText>Calories</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stat}>
        <ThemedText type="defaultSemiBold">25</ThemedText>
        <ThemedText>Minutes</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stat: {
    alignItems: 'center',
  },
}); 