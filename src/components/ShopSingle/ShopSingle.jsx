import { useParams } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import DefaultHero from "../DefaultHero/DefaultHero";
import BgHero from "../../img/bg/bg-default-hero.jpg";
import styles from "../../styles/ShopSingle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { takeSingleProduct } from "../../features/products/productsSlice";
import { StarIcon } from "../../icons";
import Button from "../UI/Button/Button";
import ProductsList from "../ProductsList/ProductsList";
import ScrollToTopOnMount from "../Routes/ScrollToTopOnMount";
import { useEffect, useRef } from "react";

const ShopSingle = () => {
  const params = useParams();
  const scrollElementRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(takeSingleProduct(params.id));
    scrollElementRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [params.id, dispatch]);

  const { singleProd } = useSelector(({ products }) => products);
  const { list } = useSelector(({ products }) => products);
  const related = list.filter(
    (item) => item.category === singleProd.category && item.id !== singleProd.id
  );
  const { title, fullPrice, salePrice, category, photo, raiting } = singleProd;
  const raitingArr = new Array(raiting).fill(null);

  return (
    <>
      <ScrollToTopOnMount />
      <DefaultHero title={"Shop Single"} mainBg={BgHero} />
      <section className={styles.products_details} ref={scrollElementRef}>
        <div className={styles.img}>
          <img src={photo} alt={title} />
          <div className={styles.category}>
            <p>{category}</p>
          </div>
        </div>
        <div className={styles.about_product}>
          <h3>{title}</h3>
          <div className={styles.raiting_block}>
            {raitingArr.map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          <div className={styles.price_block}>
            <p className={styles.old_price}>${fullPrice}</p>
            <p className={styles.new_price}>${salePrice}</p>
          </div>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.quantity_block}>
            <p>Quantity:</p>
            <input type="number" name="" className={styles.qnt_inp} min={1} />
            <Button title={"Add To Cart"} />
          </div>
        </div>
      </section>
      <section className={styles.product_info}>
        <div className={styles.info_buttons}>
          <button disabled>Product Descriptions</button>
          <button disabled>Additional Info</button>
        </div>
        <div className={styles.product_description}>
          <p>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
      </section>
      {related.length < 1 ? (
        <h2 style={{ marginBottom: "0px" }}>No Related Products</h2>
      ) : (
        <h2>Related Products</h2>
      )}
      {related.length && <ProductsList amount={4} list={related} />}

      <Subscribe />
    </>
  );
};

export default ShopSingle;
