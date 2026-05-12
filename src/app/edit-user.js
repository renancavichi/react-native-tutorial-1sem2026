import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import FormEditUser from '../components/FormEditUser';

export default function EditUser() {
  return (
      <View style={styles.container}>
        <Header />
        <FormEditUser />
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
