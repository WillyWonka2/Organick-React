import styles from "../../styles/EcoFriendly.module.css";
import EcoBgImg from "../../img/bg/Photo.jpg";

const EcoFriendly = () => {
  return (
    <section className={styles.friendly}>
      <div className={styles.bgImg}>
        <img src={EcoBgImg} alt="EcoBg" />
      </div>
      <div className={styles.content}>
        <div className = {styles.content__block}>
          <div className={styles.head}>
            <p className="subtitle">Eco Friendly</p>
            <h2>Econis is a Friendly<br/> Organic Store</h2>
          </div>
          <ul>
            <li>
              <h6>Start with Our Company First</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <h6>Learn How to Grow Yourself</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <h6>Farming Strategies of Today</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;
