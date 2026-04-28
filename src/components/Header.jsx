import {View, Text, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'

export default function Header(){

    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FontAwesome style={styles.logo} name="users" size={26} color="#e7612b" />
                <Text style={styles.logotipo}>Logo</Text>
            </View>
            <Ionicons name="person-add-outline" size={24} color="white" onPress={() => router.push('/home')} />
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in JS
    container: {
        flexDirection: "row",
        backgroundColor: "#000000",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between"
    },
    logo:{
        marginRight: 14
    },
    logotipo: {
        color: "#FFF"
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})