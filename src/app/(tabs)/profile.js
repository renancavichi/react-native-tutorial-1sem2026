import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/Button';

export default function Profile() {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Text>Perfil</Text>
        <Button title="Logout" onPress={() => router.push('/')} />
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
  }
});
