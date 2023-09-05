import DefaultHero from "../DefaultHero/DefaultHero";
import Subscribe from "../Subscribe/Subscribe";

import AboutHeroImg from "../../img/bg/AboutHero.png";
import SaladImg from "../../img/bg/Salad.png";
import TrackImg from "../../img/bg/Tractor.png";
import ChemicalImg from "../../img/bg/ChemicalPlant.png";
import VegetablesImg from "../../img/bg/vegetables.jpg";
import PolicyImg from "../../img/bg/ReturnPurchase.png";
import FreshImg from "../../img/bg/NaturalFood.png";
import PhoneImg from "../../img/bg/PhoneTime.png";
import CardImg from "../../img/bg/CardSecurity.png";
import Team1Img from "../../img/bg/team1.jpg";
import Team2Img from "../../img/bg/team2.jpg";
import Team3Img from "../../img/bg/team3.jpg";
import Offer1Img from "../../img/bg/offer1.jpg";
import Offer2Img from "../../img/bg/offer2.jpg";
import Offer3Img from "../../img/bg/offer3.jpg";
import Offer4Img from "../../img/bg/offer4.jpg";

import { FbIcon } from "../../icons";
import { TwitIcon } from "../../icons";
import { InstIcon } from "../../icons";

import styles from "../../styles/AboutUs.module.css";
import Button from "../UI/Button/Button";

const AboutUs = () => {
  return (
    <>
      <DefaultHero title={"About Us"} mainBg={AboutHeroImg} />
      <section className={styles.about_container}>
        <div className={styles.about_img}>
          <img src={SaladImg} alt="" />
        </div>
        <div className={styles.about_content}>
          <p className="subtitle">About Us</p>
          <h2>
            We do Creative <br /> Things for Success
          </h2>
          <p className={styles.bottom_m}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.info}>
            <div className={styles.info_block}>
              <div className={styles.info_img}>
                <img src={TrackImg} alt="" />
              </div>
              <div className={styles.info_content}>
                <p>Modern Agriculture Equipment</p>
              </div>
            </div>
            <div className={styles.info_block}>
              <div className={`${styles.info_img} ${styles.second_img}`}>
                <img src={ChemicalImg} alt="" />
              </div>
              <div className={styles.info_content}>
                <p>No growth hormones are used</p>
              </div>
            </div>
          </div>
          <Button title={"Explore More"} />
        </div>
      </section>
      <section className={styles.why_choose}>
        <div className={styles.why_top}>
          <div className={styles.top_content}>
            <p className="subtitle">Why Choose us?</p>
            <h2>
              We do not buy from the
              <br /> open market & traders.
            </h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className={styles.top_plus}>
              <div className={styles.plus_dec}></div>
              <p>100% Natural Product</p>
            </div>
            <p className={styles.plus_content}>
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className={styles.top_plus}>
              <div className={styles.plus_dec}></div>
              <p> Increases resistance</p>
            </div>
            <p className={styles.plus_content}>
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <div className={styles.top_img}>
            <img src={VegetablesImg} alt="" />
          </div>
        </div>
        <div className={styles.why_bot}>
          <div className={styles.bot_item}>
            <div className={styles.item_img}>
              <img src={PolicyImg} alt="" />
            </div>
            <h6>Return Policy</h6>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className={styles.bot_item}>
            <div className={styles.item_img}>
              <img src={FreshImg} alt="" />
            </div>
            <h6>100% Fresh</h6>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className={styles.bot_item}>
            <div className={styles.item_img}>
              <img src={PhoneImg} alt="" />
            </div>
            <h6>Support 24/7</h6>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className={styles.bot_item}>
            <div className={styles.item_img}>
              <img src={CardImg} alt="" />
            </div>
            <h6>Secured Payment</h6>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className={styles.head}>
          <p className="subtitle">Team</p>
          <h2>Our Organic Experts</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className={styles.team_carts}>
          <div className={styles.cart}>
            <div className={styles.cart_photo}>
              <img src={Team1Img} alt="" />
            </div>
            <div className={styles.cart_content}>
              <h6>Giovani Bacardo</h6>
              <div className={styles.cart_info}>
                <div className={styles.role}>
                  <p className="subtitle">Farmer</p>
                </div>
                <div className={styles.socialcs}>
                  <a href="https://facebook.com">
                    <FbIcon />
                  </a>
                  <a href="https://twitter.com/">
                    <TwitIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.cart_photo}>
              <img src={Team2Img} alt="" />
            </div>
            <div className={styles.cart_content}>
              <h6>Marianne Loreno</h6>
              <div className={styles.cart_info}>
                <div className={styles.role}>
                  <p className="subtitle">Designer</p>
                </div>
                <div className={styles.socialcs}>
                  <a href="https://facebook.com">
                    <InstIcon />
                  </a>
                  <a href="https://facebook.com">
                    <FbIcon />
                  </a>
                  <a href="https://twitter.com/">
                    <TwitIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.cart_photo}>
              <img src={Team3Img} alt="" />
            </div>
            <div className={styles.cart_content}>
              <h6>Riga Pelore</h6>
              <div className={styles.cart_info}>
                <div className={styles.role}>
                  <p className="subtitle">Farmer</p>
                </div>
                <div className={styles.socialcs}>
                  <a href="https://facebook.com">
                    <FbIcon />
                  </a>
                  <a href="https://twitter.com/">
                    <TwitIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.offers}>
        <p className="subtitle">About Us</p>
        <h2>What We Offer for You</h2>
        <div className={styles.offers_blocks}>
          <div className={styles.offer}>
            <div
              className={styles.offer_img}
              style={{ backgroundImage: `url(${Offer1Img})` }}
            ></div>
            <div className={styles.offer_name}>
              <h6>Spicy</h6>
            </div>
          </div>
          <div className={styles.offer}>
            <div
              className={styles.offer_img}
              style={{ backgroundImage: `url(${Offer2Img})` }}
            ></div>
            <div className={styles.offer_name}>
              <h6>Nuts & Feesd</h6>
            </div>
          </div>
          <div className={styles.offer}>
            <div
              className={styles.offer_img}
              style={{ backgroundImage: `url(${Offer3Img})` }}
            ></div>
            <div className={styles.offer_name}>
              <h6>Fruits</h6>
            </div>
          </div>
          <div className={styles.offer}>
            <div
              className={styles.offer_img}
              style={{
                backgroundImage: `url(${Offer4Img})`,
                backgroundSize: "70%",
              }}
            ></div>
            <div className={styles.offer_name}>
              <h6>Vegetable</h6>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default AboutUs;
