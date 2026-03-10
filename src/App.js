import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CardProduct from './components/CardProduct';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.listProducts}>
          <CardProduct 
            photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqEiv_2sYIxqGCeh14q42rN9nK68ewII8fg&s"}
            title={"Horizon"}
            category={"Ação e Aventura"}
            price={229.00}
          />
          <CardProduct
            photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWJzQqlFSWDYFCjdc6QBZvzJpb74Se3HFtA&s"}
            title={"Zelda TOTK"}
            category={"Ação e Aventura"}
            price={350.00}
          />
          <CardProduct 
            photo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKpoiKC3f8eule-oA9wb68U71zyXLi8_IWA&s"}
            title={"Crimson Desert"}
            category={"Ação e Aventura"}
            price={400.00}
          />
          <CardProduct 
            photo={"https://image.api.playstation.com/vulcan/ap/rnd/202409/2716/16b33fa9a5c7285ba86a035b4a1c5f8eb430b407eae35ffd.png"}
            title={"Zero Down"}
            category={"Ação e Aventura"}
            price={129.00}
          />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',

    //flexWrap: "wrap",
    //justifyContent: 'center',
  },
  // 2 cards por linha, gap de 20px entre eles, centralizados
  listProducts: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 26
  }
});
