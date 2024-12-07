import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen() {

  const handlePressButton = () => {
    console.log('Hello!');
  };

  return (
  <View style={styles.container}>
    <Text style={styles.getStartedText}>
      Get Started with Tracking Your Health!
    </Text>
    <Text style={styles.noteText}>
    Calculate your BMI and stay on top of your wellness journey, effortlessly.
    </Text>
    {/* <TouchableOpacity
      onPress={handlePressButton}
      style={{backgroundColor: '#ffffff'}}
      >

      <text> Get Started </text>
    </TouchableOpacity> */}
  </View>
  );
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
}
});

