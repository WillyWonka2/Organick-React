import styles from "../../styles/Blog.module.css";
import { UserIcon } from "../../icons";
import Button from "../UI/Button/Button";

const SingleWeeklyNew = ({ id, date, author, title, subtitle, bg }) => {
  const newDate = date.split(" ");
  const [number, month] = newDate;
  return (
    <div className = {styles.main_block}>
      <img src={bg} alt="" />
      <div className={styles.content_block}>
        <div className={styles.date}>
          <h6>{number}</h6>
          <h6>{month}</h6>
        </div>
        <div className = {styles.about}>
          <div className={styles.author}>
            <UserIcon />
            <p>By {author}</p>
          </div>
          <h6>{title}</h6>
          <p>{subtitle}</p>
          <Button title="Read More" color="#EFD372" textColor="var(--title-color)" borderColor="transparent"/>
        </div>
      </div>
    </div>
  );
};

export default SingleWeeklyNew;
