import styles from "../../styles/Pagination.module.css";

const Pagination = ({ btnArr = [], onClick, active }) => {
  return (
    <div className={styles.btn_wrapp}>
      {btnArr.map((item, i) => (
        <button
          key={i}
          onClick={() => {
            onClick(i + 1);
          }}
          className={i + 1 === active ? styles.activeBtn : styles.btn}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
