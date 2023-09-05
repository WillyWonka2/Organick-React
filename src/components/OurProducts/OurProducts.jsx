import styles from "../../styles/OurProducts.module.css";
import { useRef, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const OurProducts = () => {
  const [countProd, setUseProd] = useState(8);
  const targetBlockRef = useRef(null);
  const { list } = useSelector(({ products }) => products);

  const moreProducts = () => {
    setUseProd(countProd + 4);
  };
  const lessProducts = () => {
    setUseProd(countProd - (list.length - 8));
    if (targetBlockRef.current) {
        targetBlockRef.current.scrollIntoView();
    }
  };
  return (
    <section className={styles.our_products} ref={targetBlockRef}>
      <p className="subtitle">Categories </p>
      <h2>Our Products</h2>
      <ProductsList amount={countProd} rowGap={20} list={list}/>
      <div className={styles.btn}>
        {list.length > countProd ? (
          <Button title="Load More" onClick={moreProducts} />
        ) : (
          <>
            <p className="subtitle">That's all)</p>
            <Button title="Load Less" onClick={lessProducts} />
          </>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
