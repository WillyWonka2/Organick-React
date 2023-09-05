import styles from "../../styles/Hero.module.css";
import Button from "../UI/Button/Button";
import Bg1 from "../../img/bg/hero.png"
import Bg2 from "../../img/bg/hero2.png"

const Hero = () => {
  return (
    <section className={styles.hero} style={{backgroundImage: `url(${Bg1})`}}>
        <div className = {styles.second_bg} style={{backgroundImage: `url(${Bg2})`}}></div>
      <p className="subtitle">100% Natural Food</p>
      <h1>
        Choose the best <br />
        healthier way <br />
        of life
      </h1>
      <Button
        title="Explore Now"
        color="var(--yellow)"
        textColor="var(--title-color)"
        borderColor="transparent"
      />
    </section>
  );
};

export default Hero;
