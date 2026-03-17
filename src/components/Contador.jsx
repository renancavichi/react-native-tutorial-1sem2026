import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function Contador() {

    const [count, setCount] = useState(5)

    return (
        <View style={styles.container}>
            <Text>Contador</Text>
            <Text>{count}</Text>
            <View style={{display: "flex", flexDirection: "row", gap: 10}}>
                <Button title='+1' onPress={() => {setCount(count + 1); console.log(count)}} />
                <Button title='-1' onPress={() => {setCount(count - 1); console.log(count)}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderStyle: "solid",
        borderRadius: 6,
        padding: 8
    }
})