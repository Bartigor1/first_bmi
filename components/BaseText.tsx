import { StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';

type BaseTextType = {
    type: 'title' | 'note',
    style?: StyleProp<ViewStyle>,
};

export default function BaseText({ type, style }: BaseTextType) {
    let textContent;

    if (type === 'title') {
        textContent = 'Get Started with Tracking Your Health!';
    } else {
        textContent = 'Calculate your BMI and stay on top of your wellness journey, effortlessly.';
    }

    return <Text style={[styles[type]]}>{textContent}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 33,
        color: '#FFFFFF',
        marginLeft: 55,
        marginRight: 68,
        marginTop: 91,
    },
    note: {
        fontSize: 15.33,
        lineHeight: 19,
        color: '#C6C3F9',
        marginHorizontal: 56,
        marginTop: 21,
    },
});