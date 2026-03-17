import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import FormSignUp from './components/FormSignUp';
import Contador from './components/Contador';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <FormSignUp />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  }
});
