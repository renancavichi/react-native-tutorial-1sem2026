import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CardUser from './components/CardUser';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <CardUser 
          avatar={"https://github.com/renancavichi.png"}
          name={"Renan Cavichi"}
          email={"renancavichi@gmail.com"}
        />
        <CardUser
          avatar={"https://github.com/maria.png"}
          name={"Maria Silva"}
          email={"maria.silva@gmail.com"}
        />
        <CardUser 
          avatar={"https://github.com/josesantos.png"}
          name={"José Santos"}
          email={"jose.santos@gmail.com"}
        />
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
