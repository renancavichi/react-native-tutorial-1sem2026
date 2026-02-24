import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import CardUser from './components/CardUser';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <CardUser />
        <CardUser />
        <CardUser />
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
