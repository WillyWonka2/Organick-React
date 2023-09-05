import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { CartIcon, LogoIcon, SearchIcon } from "../../icons";

const Header = () => {
  return (
    <header className={styles.header}>
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
              className={({ isActive }) =>
                !isActive
                  ? `${styles.active} ${styles.underline_link} `
                  : `${styles.underline_link}`
              }
            >
              {" "}
              <h6>Pages</h6>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                !isActive
                  ? `${styles.active} ${styles.underline_link} `
                  : `${styles.underline_link}`
              }
              ƒ
            >
              {" "}
              <h6>Shop</h6>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                !isActive
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
              to={'/news'}
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
    </header>
  );
};

export default Header;
