import DefaultHero from "../DefaultHero/DefaultHero";

import ContactUsBgImg from "../../img/bg/contactUsBgImg.jpg";
import BananaImg from "../../img/bg/contactUsBanan.jpg";
import BananaImgWebp from "../../img/webp/contactUsBanan.webp";
import LeafImg from "../../img/bg/contactUsLeaf.jpg";
import LocationImg from "../../img/bg/loc_img.png";

import Subscribe from "../Subscribe/Subscribe";
import ScrollToTopOnMount from "../Routes/ScrollToTopOnMount";
import Socials from "../Footer/Socials";
import { MessageIcon, PhoneIcon } from "../../icons";

import styles from "../../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <DefaultHero title={"Contact Us"} mainBg={ContactUsBgImg} />
      <section className={styles.contact_us_container}>
        <div className={styles.contact_us_block}>
          <div className={styles.contact_us_img}>
            <picture>
              <source srcset={BananaImgWebp} />
              <img src={BananaImg} alt="Banana" />
            </picture>
          </div>
          <div className={styles.contact_us_content}>
            <h2>We'd love to talk about how we can work together.</h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className={styles.contact_block}>
              <MessageIcon />
              <div>
                <h6>Massege</h6>
                <a href="mailto:support@organic.com">support@organic.com</a>
              </div>
            </div>
            <div
              className={`${styles.contact_block} ${styles.contact_block_last}`}
            >
              <PhoneIcon />
              <div>
                <h6>Contact Us</h6>
                <a href="callto:+01 123 456 789">+01 123 456 789</a>
              </div>
            </div>
            <Socials margin="0px" />
          </div>
        </div>
        <div
          className={styles.location_block}
          style={{ backgroundImage: `url(${LeafImg})` }}
        >
          <div className={styles.location_info}>
            <p className="subtitle">Location</p>
            <h2>Our Farms</h2>
            <p>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using.
            </p>
            <ul>
              <li>
                <div className={styles.loc_img}>
                  <img src={LocationImg} alt="Location" />
                </div>
                <div className={styles.loc_content}>
                  <p className={styles.city}>New York, USA:</p>
                  <p>299 Park Avenue New York,</p>
                  <p>New York 10171</p>
                </div>
              </li>
              <li>
                <div className={styles.loc_img}>
                  <img src={LocationImg} alt="Location" />
                </div>
                <div className={styles.loc_content}>
                  <p className={styles.city}>London, UK:</p>
                  <p>30 Stamford Street,</p>
                  <p>London SE1 9LQ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default ContactUs;
