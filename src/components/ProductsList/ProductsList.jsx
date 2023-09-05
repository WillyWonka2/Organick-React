import styles from "../../styles/ProductsList.module.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsList = ({ amount, list, rowGap = 0 }) => {
  let newList = list.filter((_, i) => i < amount);

  return (
    <div className={styles.products_box} style={{ rowGap: `${rowGap}px` }}>
      {newList.map((product) => (
        <SingleProduct {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
