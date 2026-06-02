
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import FormLogin from '../components/FormLogin';

export default function Login() {
  const router = useRouter()

  return (
      <View style={styles.container}>
        <View style={styles.form}>
          <FormLogin />
        </View>
        <Button style={styles.signup} title="Cadastrar" onPress={() => router.push('/signup')} />
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
  signup:{
    marginTop: 20,
  },
  form:{
    width: "90%"
  }
});
