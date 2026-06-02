import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Redirect } from 'expo-router';
import { useAuthStore } from '../../stores/authStore'

export default function TabLayout() {
  const { isLogged } = useAuthStore();

  //não permite acessar as rotas das tabs se não estiver logado
  if (!isLogged) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#ef6d0a',
      tabBarInactiveTintColor: '#2d2d2d', 
      tabBarLabelStyle: {
        fontSize: 10
      },
      tabBarIconStyle: {
        marginBottom: 2,
        height: 22
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <FontAwesome size={21} name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}