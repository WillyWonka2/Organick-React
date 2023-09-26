import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { CartIcon, LogoIcon, SearchIcon } from "../../icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.b_flex_first}>
        <Link className={styles.logo} to={"/"}>
          <LogoIcon />
          <h3>Organick</h3>
        </Link>
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.underline_link} `
                    : `${styles.underline_link}`
                }
              >
                <h6>Home</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.underline_link} `
                    : `${styles.underline_link}`
                }
              >
                {" "}
                <h6>About</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/our-teams'}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.underline_link} `
                    : `${styles.underline_link}`
                }
              >
                <h6>Our Team</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.underline_link} `
                    : `${styles.underline_link}`
                }
              >
                {" "}
                <h6>Shop</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.underline_link} `
                    : `${styles.underline_link}`
                }
              >
                {" "}
                <h6>Projects</h6>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/news"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.underline_link} `
                    : `${styles.underline_link}`
                }
              >
                {" "}
                <h6>News</h6>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.b_flex_second}>
        <div className={styles.search}>
          <input type="text" name="" id="search" />
          <label htmlFor="search">
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </label>
        </div>
        <Link className={styles.cart}>
          <div className={styles.cart__icon}>
            <CartIcon />
          </div>
          <h6>Cart (0)</h6>
        </Link>
      </div>
    </header>
  );
};

export default Header;
