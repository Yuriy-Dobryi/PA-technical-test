import {
  View,
  ScrollView,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import Spinner from "react-native-loading-spinner-overlay";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPhotosData, selectPhotosWithStatus } from "../redux/selectors";
import { fetchPhotos } from "../redux/operations";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";


const Photos = () => {
  const { isLoading, isError } = useSelector(selectPhotosData);
  const photos = useSelector(selectPhotosWithStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  function handlePress(photoItem) {
    photoItem.isLiked
      ? dispatch(removeFromFavorite(photoItem.id))
      : dispatch(addToFavorite(photoItem));
  }

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      {isError && <Text>Something went wrong</Text>}

      {photos.length > 0 && (
        <View>
          <ScrollView>
            {photos.map((item) => (
              <View key={item.id} style={styles.photoItem}>
                <Image
                  style={styles.image}
                  source={{ uri: item.thumbnailUrl }}
                />
                <View style={styles.infoWrapper}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Pressable
                    onPress={() => handlePress(item)}
                  >
                    <FontAwesome
                      name={item.isLiked ? "heart" : "heart-o"}
                      size={20}
                      color={"green"}
                    />
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

export default Photos;

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