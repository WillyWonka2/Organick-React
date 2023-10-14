import { Link } from "react-router-dom";
import { StarIcon } from "../../icons";
import styles from "../../styles/ProductsList.module.css";

const SingleProduct = ({
  title,
  fullPrice,
  salePrice,
  category,
  photo,
  photoWebp,
  raiting,
  id,
}) => {
  const raitingArr = new Array(raiting).fill(null);

  return (
    <div className={styles.product_block}>
      <div>
        <p className={styles.category}>{category}</p>
      </div>
      <div className={styles.prod_img}>
        <picture>
          <source srcset={photoWebp} />
          <img src={photo} alt={title} />
        </picture>
      </div>
      <div>
        <h6>{title}</h6>
        <div className={styles.prices_block}>
          <div className={styles.prices}>
            <p className={styles.old_price}>${fullPrice}</p>
            <p className={styles.new_price}>${salePrice}</p>
          </div>
          <div className={styles.raiting}>
            {raitingArr.map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>
      <Link to={`/shop/${id}`} className={styles.link}></Link>
    </div>
  );
};

export default SingleProduct;
