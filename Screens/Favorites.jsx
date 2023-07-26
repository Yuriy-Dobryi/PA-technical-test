import { View, ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectFavorite } from "../redux/selectors";
import PhotoItem from "../components/PhotoItem";
import { styles } from "../components/repeatedStyles";

const Favorite = () => {
  const favorite = useSelector(selectFavorite);
  const isAnyFavorite = favorite.length > 0;

  return (
    <View style={styles.container}>
      {isAnyFavorite ? (
        favorite.length > 0 && (
          <ScrollView>
            {favorite.map((item) => (
              <PhotoItem key={item.id} item={item} />
            ))}
          </ScrollView>
        )
      ) : (
        <>
          <Text style={styles.message}>
            No items have been added to favorites yet.
          </Text>
          <Text style={styles.smile}>🧐</Text>
        </>
      )}
    </View>
  );
};

export default Favorite;