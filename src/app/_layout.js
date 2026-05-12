import { Stack } from "expo-router"

export default function RootLayout() {
    return(
        <Stack screenOptions={{ 
            headerStyle: { backgroundColor: "#000000" }, 
            headerTintColor: "#fff"
        }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen 
                name="signup"
                options={{ 
                    headerShown: true,
                    title: "Cadastro", 
            }} />
            <Stack.Screen 
                name="edit-user"
                options={{ 
                    headerShown: true,
                    title: "Editar Usuário",
                    presentation: 'modal' 
            }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}