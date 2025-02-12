import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './ui/IconSymbol';

type WorkoutCardProps = {
  title: string;
  duration: string;
  difficulty: string;
  exercises: number;
  image: any;
};

export function WorkoutCard({ title, duration, difficulty, exercises, image }: WorkoutCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <ImageBackground source={image} style={styles.card} imageStyle={styles.cardImage}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <ThemedView style={styles.details}>
            <ThemedView style={styles.detail}>
              <IconSymbol name="clock.fill" size={16} color="#fff" />
              <ThemedText style={styles.detailText}>{duration}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.detail}>
              <IconSymbol name="gauge.fill" size={16} color="#fff" />
              <ThemedText style={styles.detailText}>{difficulty}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.detail}>
              <IconSymbol name="list.bullet" size={16} color="#fff" />
              <ThemedText style={styles.detailText}>{exercises} exercises</ThemedText>
            </ThemedView>
          </ThemedView>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  card: {
    height: 180,
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 16,
  },
  gradient: {
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    gap: 16,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    color: '#fff',
  },
}); 