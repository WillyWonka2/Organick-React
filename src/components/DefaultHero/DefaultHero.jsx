import styles from "../../styles/Hero.module.css";

const DefaultHero = ({ title, mainBg }) => {
  return (
    <section
      className={styles.default_hero}
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <h1>{title}</h1>
    </section>
  );
};

export default DefaultHero;
