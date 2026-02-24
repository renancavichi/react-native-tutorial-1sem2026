import {View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.logotipo}>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: "100%",
        height: 45,
        marginBottom: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    logotipo: {
        color: "#FFF"
    }
})