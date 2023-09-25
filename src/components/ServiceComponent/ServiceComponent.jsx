import DefaultHero from "../DefaultHero/DefaultHero";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

import ServiceBgImg from "../../img/bg/serviceBg.png";
import OrganicSectionBg from "../../img/bg/organicSectionBg.png";
import BottleImg from "../../img/bg/MilkBottle.png";
import DeliveryImg from "../../img/bg/Delivery.png";
import NaturalFood2Img from "../../img/bg/NaturalFood2.png";
import VegetablesBagImg from "../../img/bg/VegetablesBag2.png";
import RadishImg from "../../img/bg/Radish.png";
import OnlineStoreImg from "../../img/bg/OnlineStore.png";
import NutsImg from "../../img/bg/nuts.png";

import styles from "../../styles/ServiceComponent.module.css";

const ServiceComponent = () => {
  return (
    <>
      <DefaultHero title={"Services"} mainBg={ServiceBgImg} />
      <section className={styles.what_we_grow}>
        <p className={`subtitle ${styles.subtitle}`}>What we Grow</p>
        <h2>
          Better Agriculture for <br /> Better Future
        </h2>
        <div className={styles.products_block}>
          <div className={styles.left}>
            <div>
              <div className={styles.service_img}>
                <img src={BottleImg} alt="" />
              </div>
              <h6>Dairy Products</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div>
              <div className={styles.service_img}>
                <img src={OnlineStoreImg} alt="" />
              </div>

              <h6>Store Services</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div>
              <div className={styles.service_img}>
                <img src={DeliveryImg} alt="" />
              </div>
              <h6>Delivery Services</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
          </div>
          <div className={styles.block_img}>
            <img src={NutsImg} alt="" />
          </div>
          <div className={styles.right}>
            <div>
              <div className={styles.service_img}>
                <img src={NaturalFood2Img} alt="" />
              </div>
              <h6>Delivery Services</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div>
              <div className={styles.service_img}>
                <img src={VegetablesBagImg} alt="" />
              </div>
              <h6>Delivery Services</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
            <div>
              <div className={styles.service_img}>
                <img src={RadishImg} alt="" />
              </div>
              <h6>Delivery Services</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremqlaudantium. Sed ut perspiciatis
              </p>
            </div>
          </div>
        </div>
        <Link to={'/service/quality-standart'}>
          <Button
            title={"Explore More"}
            color={"transparent"}
            textColor={"#274C5B"}
          />
        </Link>
      </section>
      <section
        className={styles.organic_section}
        style={{ backgroundImage: `url(${OrganicSectionBg})` }}
      >
        <div className={styles.organic_head}>
          <p className={`subtitle ${styles.subtitle}`}>Organic Only</p>
          <h2>Everyday Fresh & Clean</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
