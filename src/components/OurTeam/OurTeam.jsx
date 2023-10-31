import styles from "../../styles/AboutUs.module.css";

import team from "../../features/objects/team";

import { FbIcon } from "../../icons";
import { TwitIcon } from "../../icons";
import { InstIcon } from "../../icons";

const OurTeam = ({ count = team.length }) => {
  const ourTeam = team.filter((_, i) => i < count);
  return (
    <div className={styles.team_carts}>
      {ourTeam.map(({ name, typeOfWork, socials, photo, id }) => (
        <div className={styles.cart} key={id}>
          <div className={styles.cart_photo}>
            <img src={photo} alt={typeOfWork} />
          </div>
          <div className={styles.cart_content}>
            <h6>{name}</h6>
            <div className={styles.cart_info}>
              <div className={styles.role}>
                <p className="subtitle">{typeOfWork}</p>
              </div>
              <div className={styles.socialcs}>
                {socials.fbLink && <a href={socials.fbLink}>
                  <FbIcon />
                </a>}
                {socials.instLink && <a href={socials.instLink}>
                  <TwitIcon />
                </a>}
                {socials.twitterLink && <a href={socials.twitterLink}>
                  <InstIcon />
                </a>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
