import { StyleSheet, View, Text } from "react-native"
import { Image } from "expo-image"

export default function CardUser(props){

    const {avatar, name, email} = props

    return (
        <View style={styles.container}>
            <Image 
                style={styles.avatar}
                //source={require("../../assets/adaptive-icon.png")} // Imagem local, pasta assets
                source={avatar} // Imagem externa, url
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderStyle: "solid",
        borderRadius: 20,
        flexDirection: "row",
        padding: 16,
        gap: 10,
        marginBottom: 20,
        width: "80%",
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