import { View, Text, StyleSheet, TextInput} from 'react-native'
import { useState } from 'react'
import Button from './Button';
import { useUserStore } from '../stores/userStore';

export default function FormEditUser() {

  const { addUser, userToEdit, updateUser } = useUserStore()

  const [name, setName] = useState(userToEdit.name)
  const [email, setEmail] = useState(userToEdit.email)
  const [pass, setPass] = useState(userToEdit.pass)
  const [avatar, setAvatar] = useState(userToEdit.avatar)

  const handleSubmit = async () => {
    console.log({name, email, pass, avatar})
    
    const response = await fetch(`http://localhost:3333/user/${userToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, pass, avatar})
    })

    if(response.ok){
      console.log("Usuário editado com sucesso!")
      const data = await response.json()
      console.log(data)
      updateUser(data.user, userToEdit.id)
    } else {
      console.log("Erro ao editar usuário")
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuário</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Nome"
            value={name}
            onChangeText={setName}
        />
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
        <TextInput 
            style={styles.inputs} 
            placeholder="Avatar" 
            value={avatar}
            onChangeText={setAvatar}
        />
        <Button title="Editar" onPress={handleSubmit} />
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