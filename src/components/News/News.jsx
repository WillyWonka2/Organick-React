import { useSelector } from "react-redux";
import styles from "../../styles/News.module.css";
import SingleNew from "../SingleNew/SingleNew";
const News = () => {
  const { news } = useSelector(({ products }) => products);
  
  return (
    <section className={styles.news}>
      {news.map((item) => {
        return <SingleNew key={item.id} {...item} />;
      })}
    </section>
  );
};

export default News;
