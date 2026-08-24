import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
export default function Home() {
    const nav = useNavigation();
    const [usuario, setUsuario] = useState('');
    return (
    <View style={estilos.contenedor}>
        <Text style={estilos.txt}>Bem-vindo!</Text>
        <Button title= "Sobre nós" onPress={() => nav.navigate('Sobre')} />{/*Em funções que tem apenas uma linha de código, a arrow function não precisa de chaves8*/}
        <TextInput style={estilos.campo} value={usuario} onChangeText={setUsuario} placeholder="Digite o nome de usuário"/>
        <Button title= "Entrar" onPress={() => nav.navigate('Login', {usuario, saud: saudacao})}/>
        <Button title= "Estudo do Flex" onPress={() => nav.navigate('Flex')}/>
        <Text>Dados: {saudacao} {usuario}</Text>
    </View>);
}
const estilos = StyleSheet.create ({
    contenedor: {
        flex: 1, gap: 15, justifyContent: 'center', alignItems:'center'
    },
    txt: {fontSize:30},
    campo: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    }
})
