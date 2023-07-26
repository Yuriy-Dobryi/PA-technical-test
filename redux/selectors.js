import { createSelector } from "@reduxjs/toolkit";

export const selectPhotosData = (state) => state.photos;
export const selectFavorite = (state) => state.favorite.list;
export const selectFilter = (state) => state.filter;

export const selectModifiedPhotos = createSelector(
  [selectPhotosData, selectFavorite, selectFilter],
  ({ list: photos }, favorite, filter) => {
    const photosWithCorrectStatus = photos.map((photo) => {
      const isLiked = favorite.some((fav) => fav.id === photo.id);
      return { ...photo, isLiked };
    });

    if (filter) {
      const lowerCaseFilter = filter.toLowerCase();
      const filteredPhotos = photosWithCorrectStatus.filter(({ title }) =>
        title.toLowerCase().includes(lowerCaseFilter)
      );
      return filteredPhotos;
    }
    return photosWithCorrectStatus;
  }
);