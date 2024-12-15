import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import BaseButton from '@/components/BaseButton'
import { useState } from 'react'

export default function MainScreen() {
    const { push } = useRouter()

    const [age, setAge] = useState(110)
    const [weight, setWeight] = useState(78)
    // let weight = 78

    const handlePressButton = () => {
        console.log('Нажатие кнопки Get Started')
    }
    const handlePressMinus = () => {
        setAge((e) => (e > 16 ? e - 1 : e)
        )
    }
    const handlePressPlus = () => {
        setAge((e) => (e < 120 ? e + 1 : e)
        )
    }
    const isAgeLess16 = age <= 16
    const isAgeMore120 = age >= 120


    return (
        <><View style={styles.container}>
            <Text style={styles.titleText}>
                BMI CALCULATOR
            </Text>

            <View style={styles.counterContainer}>

                <View>
                    <View
                        style={styles.counterBlock}>
                        <Text
                            style={styles.counterBlockTitleText}>
                            Age</Text>
                        <Text
                            style={styles.counterBlockNumber}>
                            {age}
                        </Text>
                        <View style={styles.counterButtonCase}>
                            <TouchableOpacity
                                disabled={isAgeLess16}
                                onPress={handlePressMinus}
                                style={styles.capsuleMinusButton}>
                                <Image
                                    style={styles.minusImage}
                                    source={require('../assets/icons/minus.svg')}
                                    contentFit='contain'
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={isAgeMore120}
                                onPress={handlePressPlus}
                                style={styles.capsulePlusButton}
                            // style={{ opacity: isAgeMore120 ? 0.3 : 1, }}
                            >
                                <Image
                                    style={styles.plusImage}
                                    source={require('../assets/icons/plus.svg')}
                                    contentFit='contain'
                                >
                                </Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View>
                    <View
                        style={styles.counterBlock}>
                        <Text
                            style={styles.counterBlockTitleText}>
                            Weight (KG) </Text>
                        <Text
                            style={styles.counterBlockNumber}>
                            {weight}
                        </Text>
                        <View style={styles.counterButtonCase}>
                            <TouchableOpacity
                                onPress={handlePressMinus}
                                style={styles.capsuleMinusButton}>
                                <Image
                                    style={styles.minusImage}
                                    source={require('../assets/icons/minus.svg')}
                                    contentFit='contain'
                                >
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handlePressPlus}
                                style={styles.capsulePlusButton}>
                                <Image
                                    style={styles.plusImage}
                                    source={require('../assets/icons/plus.svg')}
                                    contentFit='contain'
                                >
                                </Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>



            <BaseButton
                style={{ marginTop: 37 }}
                onPress={handlePressButton}
                type='purple'
            />
        </View >
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'F4F3FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 17.6,
        lineHeight: 21.3,
        color: '#081854',
        marginTop: 37,
    },
    counterContainer: {
        flexDirection: 'row',
        gap: 21,
        marginTop: 39,
    },
    counterButtonCase: {
        flexDirection: 'row',
        gap: 31.66,
    },
    counterBlock: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingBottom: 14,
        paddingTop: 27,
        paddingHorizontal: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    capsuleMinusButton: {
        backgroundColor: '#081854',
        // opacity: isAgeLess16 ? 0.3 : 1,
        borderRadius: '100%',
        width: 34,
        aspectRatio: 1 / 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    capsulePlusButton: {
        backgroundColor: '#081854',
        // opacity: isAgeMore120 ? 0.3 : 1,
        borderRadius: '100%',
        width: 34,
        aspectRatio: 1 / 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    minusImage: {
        width: 15.03,
        height: 4.29
    },
    plusImage: {
        width: 17.59,
        aspectRatio: 1 / 1,
    },
    counterBlockTitleText: {
        fontSize: 17.6,
        lineHeight: 21.3,
        color: '#2F2E41',
    },
    counterBlockNumber: {
        fontSize: 57.39,
        lineHeight: 69.46,
        color: '#6C63FF',
        fontWeight: 700,
        marginTop: 3,
        marginBottom: 7,
    },
})
