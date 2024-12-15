import { View, StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

type BaseButtonType = {
    onPress: () => void;
    type: 'white' | 'purple';
    style?: StyleProp<ViewStyle>;
};

export default function BaseButton({ onPress, type, style }: BaseButtonType) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                type === 'purple' ? styles.buttonPurple : {},
                style,
            ]}
        >
            <Text style={[
                styles.buttonText,
                type === 'purple' ? styles.buttonTextPurple : {},

            ]}>Get Started</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        marginHorizontal: 30,
        paddingVertical: 27,
        paddingHorizontal: 117,
        borderRadius: 63,
    },
    buttonText: {
        fontSize: 17.6,
        fontWeight: 500,
        lineHeight: 21,
        color: '#081854',
    },
    buttonPurple: {
        backgroundColor: '#6C63FF',
    },
    buttonTextPurple: {
        color: '#ffffff'
    },
});