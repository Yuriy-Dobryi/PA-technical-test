import {
  View,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  StyleSheet,
} from "react-native";

const Photos = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Hello from Favorites</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});