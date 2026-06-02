
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Loading() {
  const router = useRouter()
  const { isLogged, login } = useAuthStore()

  useEffect(() => {
    if(isLogged){
      router.replace("/home")
    } else {
      const checkUserLogged = async () => {
        try {
          const userLogged = await AsyncStorage.getItem("userLogged")
          if(userLogged){
            const data = await JSON.parse(userLogged)
            login(data.user, data.token)
            router.replace("/home")
          } else {
            router.replace("/login")
          }
        } catch (error) {
          console.error("Error checking user login status:", error)
          router.replace("/login")
        }
      }
      checkUserLogged()
    }
  }, [])

  return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ff6a00" />
        <Text>Carregando...</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
});
