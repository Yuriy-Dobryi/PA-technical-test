import {
  View,
  ScrollView,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../redux/selectors";
import { toggleStatus } from "../redux/photosSlice";
import { removeFromFavorite } from "../redux/favoriteSlice";

const Favorite = () => {
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();

  function handlePress(photoId) {
    dispatch(removeFromFavorite(photoId));
  }

  return (
    <View style={styles.container}>
      {favorite.length > 0 && (
        <View>
          <ScrollView>
            {favorite.map((item) => (
              <View key={item.id} style={styles.photoItem}>
                <Image
                  style={styles.image}
                  source={{ uri: item.thumbnailUrl }}
                />
                <View style={styles.infoWrapper}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Pressable onPress={() => handlePress(item.id)}>
                    <FontAwesome name={"heart"} size={"20"} color={"green"} />
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  photoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  infoWrapper: {
    flexShrink: 1,
  },
  title: {
    marginBottom: 10,
  },
});