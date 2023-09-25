import styles from "../../styles/QualityStandart.module.css";

import DefaultHero from "../DefaultHero/DefaultHero";
import Subscribe from "../Subscribe/Subscribe";

import QualityStandartBg from "../../img/bg/qualityStandartBg.png";
import QualityImg1 from "../../img/bg/qualityImg1.png";
import QualityImg2 from "../../img/bg/qualityImg2.jpg";
import QualityImg3 from "../../img/bg/qualityImg3.jpg";

const QulityStandart = () => {
  return (
    <>
      <DefaultHero title={"Quality Standard"} mainBg={QualityStandartBg} />
      <section className={styles.quality_standart_section}>
        <img src={QualityImg1} alt="" className={styles.hero_img} />
        <div className={styles.container}>
          <h2>Organic Store Services</h2>
          <p className={styles.first_p}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
          <div className={styles.organic_blocks}>
            <div className={styles.organic_block}>
              <div className={styles.block_img}>
                <img src={QualityImg2} alt="" />
              </div>
              <div className={styles.block_content}>
                <div className={styles.content}>
                  <h6>Why Organic</h6>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptat. page editors now use Lorem Ipsum as their default
                    model text, and auncover.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.organic_block}>
              <div className={styles.block_img}>
                <img src={QualityImg3} alt="" />
              </div>
              <div className={styles.block_content}>
                <div className={styles.content}>
                  <h6>Speciality Produce</h6>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptat. page editors now use Lorem Ipsum as their default
                    model text, and auncover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4>We farm your land</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <div className = {styles.quality_standarts}>
            <div className = {styles.standart_block}>
                <div className = {styles.count}><h6>01</h6></div>
                <h6>Best quality support</h6>
            </div>
            <div className = {styles.standart_block}>
                <div className = {styles.count}><h6>02</h6></div>
                <h6>Money back guarantee</h6>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default QulityStandart;
