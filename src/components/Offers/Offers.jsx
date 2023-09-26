import { useSelector } from "react-redux";
import styles from "../../styles/Offers.module.css";
import ProductsList from "../ProductsList/ProductsList";
import Button from "../UI/Button/Button";

const Offers = () => {
  const { list } = useSelector(({ products }) => products);
  const veganList = list.filter((prod) => prod.category === "Vegetable");
  return (
    <section className={styles.offers}>
      <div className = "container">
        <div className={styles.head}>
          <div>
            <p className="subtitle">Offer</p>
            <h2>We Offer Organic For You</h2>
          </div>
          <div>
            <Button
              title="View All Product"
              color="#EFD372"
              textColor="var(--title-color)"
            ></Button>
          </div>
        </div>
        <ProductsList amount={4} list={veganList} />
      </div>
    </section>
  );
};

export default Offers;
