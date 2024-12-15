import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
export default function HomeScreen() {
  const handlePressButton = () => {
    console.log('Нажатие кнопки Get Started')
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 251, width: 296 }}
        source={require('./../ assets / images / start - page.png')}
        contentFit="cover"
      />
      <Text style={styles.getStartedText}>
        Get Started with Tracking Your Health!
      </Text>
      <Text style={styles.noteText}>
        Calculate your BMI and stay on top of your wellness journey,
        effortlessly.
      </Text>
      <View style={{ width: '100%' }}>
        <TouchableOpacity
          onPress={handlePressButton}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 33,
    color: '#FFFFFF',
    marginLeft: 55,
    marginRight: 68,
  },
  noteText: {
    fontSize: 15.33,
    lineHeight: 19,
    color: '#C6C3F9',
    marginHorizontal: 56,
    marginTop: 21,
  },
})
