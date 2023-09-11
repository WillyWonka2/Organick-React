import { useSelector } from "react-redux";
import styles from "../../styles/Blog.module.css";
import Button from "../UI/Button/Button";
import WeeklyNews from "./WeeklyNews";
import { Link } from "react-router-dom";

const Blog = () => {
  const { list } = useSelector(({ news }) => news);

  return (
    <section className={styles.blog}>
      <div className={styles.head}>
        <div className={styles.content}>
          <p className="subtitle">News</p>
          <h2>
            Discover weekly content about
            <br /> organic food, & more
          </h2>
        </div>
        <div className={styles.btn}>
          <Link to={'/news'}>
            <Button
              title="More News"
              color="transparent"
              textColor="var(--title-color)"
            />
          </Link>
        </div>
      </div>
      <WeeklyNews amount={2} list={list} />
    </section>
  );
};

export default Blog;
