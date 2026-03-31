import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import CardUser from '../components/CardUser';
import { useEffect, useState } from 'react';

export default function Home() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3333/user")
      const data = await response?.json()
      if(response.ok){
        console.log(data.users)
        setUsers(data.users)
        setIsLoading(false)
      } else {
        console.error("Erro ao buscar usuários", data)
        setIsLoading(false)
      }
    }
    getUsers()

  }, [])

  return (
      <View style={styles.container}>
        <Header />

       {isLoading ? <Text>Carregando...</Text> : users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id} 
            avatar={user.avatar}
            name={user.name}
            email={user.email}
            users={users}
            setUsers={setUsers}
          />
        ))}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    //justifyContent: 'center',
  }
});
