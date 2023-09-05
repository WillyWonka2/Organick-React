import styles from "../../styles/Subscribe.module.css";
import bg from "../../img/bg/Subsc.jpg";
import Button from "../UI/Button/Button";

const Subscribe = () => {
  return (
    <section className={styles.subs} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.content}>
        <h2>Subscribe to<br /> our Newsletter</h2>
      </div>
      <div className={styles.form_block}>
        <form action="post">
          <input type="email" placeholder="Your Email Address" />
          <Button title="Subscribe" type="submit" arrow={false}/>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
