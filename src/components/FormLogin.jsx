import { View, Text, StyleSheet, TextInput} from 'react-native'
import { useState } from 'react'
import Button from './Button';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function FormLogin() {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const { login } = useAuthStore()
  const router = useRouter()

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, pass})
    })

    if(response.ok){
      console.log("Usuário logado com sucesso!")
      const data = await response.json()
      console.log(data)
      // Salva os dados do usuário e token na memória
      login(data.user, data.token)
      // Salva os dados do usuário e token no AsyncStorage para persistência
      await AsyncStorage.setItem("userLogged", JSON.stringify(data))
      router.replace("/home")
    } else {
      console.log("Erro ao logar usuário")
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            secureTextEntry
            value={pass}
            onChangeText={setPass}
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  form:{
    width: "90%",
    gap: 10
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderStyle: "solid",
    borderRadius: 6,
    padding: 8
  },
    title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20
  }
})