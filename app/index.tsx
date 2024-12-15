import { View, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import BaseButton from '@/components/BaseButton'
import BaseImage from '@/components/BaseImage'
import BaseText from '@/components/BaseText'

export default function HomeScreen() {
  const { replace } = useRouter()
  const handlePressButton = () => {
    replace('/main-screen')
    console.log('Нажатие кнопки Get Started')
  }

  return (
    <View style={styles.container}>
      <BaseImage type='text' />
      <BaseImage type='image' />
      <BaseText type='title' style={undefined} />
      <BaseText type='note' style={undefined} />
      <BaseButton
        style={{ marginTop: 38 }}
        onPress={handlePressButton}
        type='white'
      />

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
