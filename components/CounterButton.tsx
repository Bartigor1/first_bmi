import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

interface CounterButtonProps {
  initialValue: number;
  minValue: number;
  maxValue: number;
  onChange: (value: number) => void;
}

export default function CounterButton({
  initialValue,
  minValue,
  maxValue,
  onChange,
}: CounterButtonProps) {
  const [value, setValue] = useState(initialValue);

  const handleDecrease = () => {
    if (value > minValue) {
      setValue(value - 1);
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < maxValue) {
      setValue(value + 1);
      onChange(value + 1);
    }
  };

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity
        disabled={value <= minValue}
        onPress={handleDecrease}
        style={[
          styles.controlButton,
          value <= minValue && { opacity: 0.3 },
        ]}
      >
        <Image
          style={styles.icon}
          source={require('../assets/icons/minus.svg')}
          contentFit="contain"
        />
      </TouchableOpacity>
      <Text style={styles.valueText}>{value}</Text>
      <TouchableOpacity
        disabled={value >= maxValue}
        onPress={handleIncrease}
        style={[
          styles.controlButton,
          value >= maxValue && { opacity: 0.3 },
        ]}
      >
        <Image
          style={styles.icon}
          source={require('../assets/icons/plus.svg')}
          contentFit="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  controlButton: {
    backgroundColor: '#081854',
    borderRadius: '50%',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 13,
    height: 13,
  },
  valueText: {
    fontSize: 22,
    color: '#2F2E41',
  },
});

function useState(initialValue: number): [any, any] {
  throw new Error('Function not implemented.');
}
