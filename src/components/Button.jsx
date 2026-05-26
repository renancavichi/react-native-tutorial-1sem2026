import {View, Text, StyleSheet} from 'react-native'

export default function Button({ title, onPress, style, textStyle }) {
    return (
        <View onClick={onPress} style={[styles.container, style]}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#ef6d0a',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16
    },
    title: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '400',
    }
})