Flex.js

import {
  View, Text, StyleSheet
} from "react-native";
export default function Flex () {
  return(<View style={styles.container}>
    <View style={styles.esq}><Text style={styles.txt}>Esquerda</Text></View>
    <View style={styles.centro}><Text style={styles.txt}>Centro</Text></View>
    <View style={styles.dir}><Text style={styles.txt}>Direita</Text></View>
  </View>);
}

const styles = StyleSheet.create ( {
  container: {flex:1, backgroundColor: '#f5f5f5', flexDirection: 'row'},
  esq: { flex: 1, backgroundColor: '#6200ee', justifyContent: 'center', alignItems: 'center'},
  centro: { flex: 6, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center'},
  dir: { flex: 1, backgroundColor: '#03dac6', justifyContent: 'center', alignItems: 'center'},
  txt: { color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 14 }
})
