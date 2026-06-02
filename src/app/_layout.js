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
                    //presentation: 'modal',
                    presentation: 'formSheet',
                    sheetAllowedDetents: [0.5, 0.9],
                    sheetInitialDetentIndex: 1,
                    sheetGrabberVisible: true,
                    sheetCornerRadius: 24, 
            }} />
            <Stack.Screen 
                name="login"
                options={{ 
                    headerShown: false
            }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}