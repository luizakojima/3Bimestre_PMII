Sobre.js

import { View, Text, StyleSheet, ScrollView } from "react-native";
export default function Sobre (){
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Termos de Uso e Política</Text>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>

        <Text style={styles.paragraph}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillium dolore eu fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident,
          sunt in culpa qui officia desenrunt mollit anim id est laborum.
        </Text>
  
        <Text style={styles.paragraph}>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
  )
}
