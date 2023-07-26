import { View, ScrollView, Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import { selectPhotosData, selectModifiedPhotos } from "../redux/selectors";
import { fetchPhotos } from "../redux/operations";
import PhotoItem from "../components/PhotoItem";
import Filter from "../components/Filter";
import { styles } from "../components/repeatedStyles";

const Photos = () => {
  const { list: photos, isLoading, error } = useSelector(selectPhotosData);
  const filteredPhotos = useSelector(selectModifiedPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const isPhotosExist = photos.length > 0;
  const isFoundByFilter = filteredPhotos.length > 0;

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />

      {isPhotosExist && (
        <ScrollView>
          <Filter />
          {isFoundByFilter ? (
            filteredPhotos.map((item) => (
              <PhotoItem key={item.id} item={item} />
            ))
          ) : (
            <>
              <Text style={styles.message}>
                No matching results were found for your request.
              </Text>
              <Text style={styles.smile}>🤔</Text>
            </>
          )}
        </ScrollView>
      )}

      {error && (
        <>
          <Text style={styles.message}>
            Apologies, something went wrong, please, try later.
          </Text>
          <Text style={styles.smile}>🙄</Text>
        </>
      )}
    </View>
  );
};

export default Photos;