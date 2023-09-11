import styles from "../../styles/About.module.css";

import { Link } from "react-router-dom";

import Button from "../UI/Button/Button";
import AbouImg from "../../img/bg/aboutIMG.png";
import OrganicImg from "../../img/bg/organic.png";
import QualityImg from "../../img/bg/quality.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_img}>
        <img src={AbouImg} alt="About" />
      </div>
      <div className={styles.about_content}>
        <p className="subtitle">About Us</p>
        <h2>We Believe in Working Accredited Farmers</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className = {styles.info_container}>
          <div className={styles.info}>
            <div className={styles.info_img}>
              <img src={OrganicImg} alt="Organic Foods" />
              <div className={styles.circle}></div>
            </div>
            <div className={styles.info_content}>
              <h6>Organic Foods Only</h6>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_img}>
              <img src={QualityImg} alt="Quality Standarts" />
              <div className={`${styles.circle} ${styles.circle2}`}></div>
            </div>
            <div className={styles.info_content}>
              <h6>Quality Standards</h6>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <Link to={'/shop'}>
        <Button title="Shop Now" />

        </Link>
      </div>
    </section>
  );
};

export default About;
