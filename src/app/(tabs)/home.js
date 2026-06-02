import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';
import { useEffect, useState } from 'react';
import { useUserStore } from '../../stores/userStore';

export default function Home() {

  const { users, setUsers } = useUserStore()
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
       {isLoading ? <Text>Carregando...</Text> : 
        <FlatList
          data={users} //array de dados para renderizar
          renderItem={({ item }) => // componente para renderizar cada item do array
            <CardUser
              id={item.id}
              avatar={item.avatar}
              name={item.name}
              email={item.email}
            />
          }
          keyExtractor={(item) => item.id} // chave única para cada item, importante para performance do Flatlist
          style={styles.list}
        />
        }
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
  },
  list: {
    width: "100%",
    paddingHorizontal: 16,
  }
});


