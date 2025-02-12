import { 
  StyleSheet, 
  TouchableOpacity, 
  TouchableOpacityProps,
  Text 
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'contained' | 'text';
}

export function Button({ style, variant = 'contained', children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant === 'text' && styles.textButton,
        style
      ]} 
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[
        styles.text,
        variant === 'text' && styles.textButtonText
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  textButtonText: {
    color: '#666',
  },
}); 