import styles from "../../styles/Category.module.css";
import JuiceBgImg from "../../img/bg/juice.jpg";
import OrganicBgImg from "../../img/bg/organic.jpg";
import NutsBgImg from "../../img/bg/nuts.jpg";

const Categories = () => {
  return (
    <section className={styles.category}>
      <div className={styles.item}>
        <img src={JuiceBgImg} alt="Organic Juice" />
        <div className={styles.button_block}>
          <div className={styles.button}>
            <h6>Organic Juice</h6>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <img src={OrganicBgImg} alt="Organic Food" />
        <div className={styles.button_block}>
          <div className={styles.button}>
            <h6>Organic Food</h6>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <img src={NutsBgImg} alt="Nuts Cookis" />
        <div className={styles.button_block}>
          <div className={styles.button}>
            <h6>Nuts Cookis</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
