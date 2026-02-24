import { StyleSheet, View, Text } from "react-native";

export default function CardUser(){
    return (
        <View style={styles.container}>
            <View style={styles.avatar}></View>
            <View>
                <Text style={styles.name}>Nome do User</Text>
                <Text style={styles.email}>nomeuser@email.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#CCC",
        borderStyle: "solid",
        borderRadius: 20,
        flexDirection: "row",
        padding: 16,
        gap: 10,
        marginBottom: 30
    },
    avatar:{
        backgroundColor: "#d0eaf1",
        borderRadius: 20, 
        width: 40,
        height: 40
    },
    name: {
        fontSize: 16,
        fontWeight: "700"
    },
    email: {
        fontSize: 14,
        color: "#505050"
    }
})