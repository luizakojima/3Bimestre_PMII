import { View, Text } from "react-native";
export default function Login(route) {
  return (
  <View>
    <Text>{route.params?.saud} {route.params?.usu}</Text>
  </View>);
}
