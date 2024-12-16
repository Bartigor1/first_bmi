import { Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
// import { Image } from 'expo-image'

type BaseImageType = {
    type: 'text' | 'image',
    style?: StyleProp<ViewStyle>,
};

export default function BaseImage({ type, style }: BaseImageType) {
    let imageSource;
    let imgStyles;

    if (type === 'text') {
        imageSource = require('../assets/icons/start-page-text.svg');
        imgStyles = styles.startPageText;

    } else {
        imageSource = require('../assets/images/start-page.png');
        imgStyles = styles.startPageImage;

    }

    return (
        <Image
            style={[imgStyles]}
            source={imageSource}
            contentFit="cover"
        />
    );
}

const styles = StyleSheet.create({
    startPageImage: {
        height: 251,
        width: 296,
        marginTop: 57,
    },
    startPageText: {
        height: 37,
        width: 104,
        marginHorizontal: 96,
    },
});