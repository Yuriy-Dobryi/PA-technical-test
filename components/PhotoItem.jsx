import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";

const PhotoItem = ({ item }) => {
  const dispatch = useDispatch();

  function handlePress() {
    item.isLiked
      ? dispatch(removeFromFavorite(item.id))
      : dispatch(addToFavorite(item));
  }

  return (
    <Pressable onPress={() => handlePress()}>
      <View style={styles.photoItem}>
        <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <FontAwesome
            name={item.isLiked ? "heart" : "heart-o"}
            size={24}
            color='green'
          />
        </View>
      </View>
    </Pressable>
  );
};

export default PhotoItem;

const styles = StyleSheet.create({
  photoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 15,
  },
  infoWrapper: {
    flexShrink: 1,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    textTransform: "capitalize",
  },
});