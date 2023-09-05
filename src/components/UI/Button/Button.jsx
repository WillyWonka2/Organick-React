import { ArrowIcon } from "../../../icons";
import styles from "../../../styles/Button.module.css";

const Button = ({
  title,
  color = "#274C5B",
  type = "",
  textColor = "#FFFFFF",
  arrow = true,
  onClick,
  borderColor = "#274C5B",
}) => {
  return (
    <button
      type={type}
      style={{
        backgroundColor: `${color}`,
        color: `${textColor}`,
        border: `2px solid ${borderColor}`,
      }}
      className={styles.button}
      onClick={onClick}
    >
      <div>{title}</div>
      {arrow && <ArrowIcon />}
    </button>
  );
};

export default Button;
