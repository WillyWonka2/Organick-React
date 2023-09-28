import { Link } from "react-router-dom";

import { LogoIcon} from "../../icons";
import styles from "../../styles/Footer.module.css";

import ROUTES from '../../util/routes'
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top_footer}>
        <div className={styles.contact}>
          <h5>Contact Us</h5>
          <p>Email</p>
          <a href="needhelp@Organia.com">needhelp@Organia.com</a>
          <p>Phone</p>
          <a href="#!">666 888 888</a>
          <p>Address</p>
          <a href="#!">88 road, borklyn street, USA</a>
        </div>
        <div className={styles.socials}>
          <div className={styles.title}>
            <div className={styles.title_icon}>
              <LogoIcon />
            </div>
            <div className={styles.title_title}>
              <h4>Organick</h4>
            </div>
          </div>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <Socials/>
        </div>
        <div className={styles.utility}>
          <h5>Utility Pages</h5>
          <ul>
            <li>
              <Link to={ROUTES.CONTACT_US}>
                <p>Contact Us</p>
              </Link>
            </li>
            <li>
              <Link to={'/404'}>
                <p>404 Not Found</p>
              </Link>
            </li>
            <li>
              <Link className="not-active-link">
                <p>Password Protected</p>
              </Link>
            </li>
            <li>
              <Link className="not-active-link">
                <p>Licences</p>
              </Link>
            </li>
            <li>
              <Link className="not-active-link">
                <p>Changelog</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom_footer}>
        <p>
          Copyright © Organick | Designed by VictorFlow Templates - Powered by
          Webflow
        </p>
      </div>
    </footer>
  );
};

export default Footer;
