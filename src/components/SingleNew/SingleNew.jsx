import styles from "../../styles/News.module.css";
const SingleNew = ({
  bgImage,
  subtitleColor,
  subtitleText,
  titleColor,
  titleText,
}) => {
  return (
    <div
      className={styles.new_block}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <p className="subtitle" style={{ color: subtitleColor }}>
        {subtitleText}
      </p>
      <h3 style={{ color: titleColor }}>{titleText}</h3>
    </div>
  );
};

export default SingleNew;
