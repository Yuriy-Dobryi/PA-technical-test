import { TextInput, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../redux/selectors";
import { setFilter } from "../redux/filterSlice";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        style={styles.filter}
        name='filter'
        value={filter}
        onChangeText={(text) => dispatch(setFilter(text.trim()))}
        placeholder='Find photos by title'
      />
      <MaterialIcons
        style={styles.icon}
        name={"image-search"}
        size={24}
        color='black'
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  filter: {
    marginBottom: 18,
    padding: 16,
    backgroundColor: "#fff",
    fontSize: 24,
    borderRadius: 20,
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: 16,
    transform: [{ translateX: 0 }, { translateY: -20 }],
  },
});