import { FbIcon, InstIcon, PintIcon, TwitIcon } from "../../icons";

import styles from "../../styles/Footer.module.css";

const Socials = ({margin = "auto"}) => {
  return (
    <div className={styles.socials_icons} style={{margin: margin}}>
      <a href="#!">
        <InstIcon />
      </a>
      <a href="#!">
        <FbIcon />
      </a>
      <a href="#!">
        <TwitIcon />
      </a>
      <a href="#!">
        <PintIcon />
      </a>
    </div>
  );
};

export default Socials;
