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
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
          sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
        </Text>

        <Text style={styles.paragraph}>
          Fusce ac turpis quis ligula lacina aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque lolutpat condimentum
          velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </Text>

        <Text style={styles.paragraph}>
          Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
        </Text>

        <Text style={styles.paragraph}>
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna
          augue eget diam.
        </Text>

        <Text style={styles.paragraph}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non guam. In vel mi sit amet augue conque elementum. Morbi in ipsum sit amet pede
          facilisis laoreet.
        </Text>

        <Text style={styles.paragraph}>
            Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Mauris tincidunt sem sed arcu. Nunc dignissim risus id metus. Cras ornare tristique elit. Vivamus vestibulum ntium tellus. Ere dolo, facilis non, bibendum sed, iaculis quis.
        </Text>

        {/* Um pequeno espaçador no final para o texto não "bater" na borda inferior */}
        ‹View style-({ height: 40 }} />
      </ScrollView></View>) ; }
//Use o site httos: //www.lipsum.com/ para criar os parágrafos
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Um cinza bem claro para fundo
  },
  
  scrollContent: {
    paddingHorizontal: 20, 
    paddingVertical: 20,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },

  paragraph: {
    fontSize: 16, 
    lineHeight: 26, //Espaçamento entre linhas (importante para textos longos)
    color: '#444',
    marginBottom: 20, //Distância entre os parágrafos
    textAlign: 'justify', //Alinhamento justificado para um visual limpo
  }
  
  
  
  )
}
