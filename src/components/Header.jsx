import {View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.logo}></View>
            <Text style={styles.logotipo}>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#000000",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16
        //justifyContent: "center",
    },
    logo:{
        backgroundColor: "#FFF",
        borderRadius: 15, 
        width: 30,
        height: 30,
        marginRight: 14
    },
    logotipo: {
        color: "#FFF"
    }
})