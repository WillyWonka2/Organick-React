import styles from "../../styles/Blog.module.css";
import SingleWeeklyNew from "./SingleWeeklyNew";

const WeeklyNews = ({ amount, list }) => {
  const newList = list.filter((_, i) => i < amount);
  return (
    <div className={styles.gallery}>
      {newList.map((item, id) => (
        <SingleWeeklyNew {...item} key={id}/>
      ))}
    </div>
  );
};

export default WeeklyNews;
