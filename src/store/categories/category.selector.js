import { createSelector } from "reselect";

export const selectCategoriesMap = createSelector(
  (state) => state.categories.categories,
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
