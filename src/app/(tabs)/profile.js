import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/Button';
import {useEffect, useState} from 'react'
import { useAuthStore } from '../../stores/authStore';
import { Image } from 'expo-image';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile() {
 
  const [userData, setUserData] = useState(null);
 
 
  const router = useRouter();
  const { user, token, logout } = useAuthStore()

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://localhost:3333/user/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json()
      if(response.ok){
        console.log("Dados do usuário:", data)
        setUserData(data.user)
      } else {
        console.log("Erro ao buscar dados do usuário:", data)
      }
    }
    getUser()
  }, [])

  const handleLogout = async() => {
    logout()
    await AsyncStorage.removeItem("userLogged")
    router.replace("/")
  }

  return (
      <View style={styles.container}>
        {userData && (
          <View>
            <Image 
                style={styles.avatar}
                source={userData.avatar} 
            />
            <Text>{userData.name}</Text>
            <Text>{userData.email}</Text>
          </View>
        )}
        <Button title="Logout" onPress={handleLogout} />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  }
});
