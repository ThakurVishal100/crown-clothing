import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
// import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../component/product-card/product-card.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";
// import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("categoriesMap:", categoriesMap);

  if (!categoriesMap) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
