import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { CartIcon, LogoIcon, SearchIcon } from "../../icons";
import { useDispatch, useSelector } from "react-redux";

import { findProducts } from "../../features/products/productsSlice";
import { useState, useRef } from "react";
const Header = () => {
  const [value, setValue] = useState("");
  const [isClickedInside, setIsClickedInside] = useState(false);
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const { findingProducts } = useSelector(({ products }) => products);

  const findProd = (value) => {
    setValue(value);
    dispatch(findProducts(value));
    document.addEventListener("click", handleOutsideClick);
  };

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsClickedInside(false);
      setValue("");
      document.removeEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
      setIsClickedInside(true);
    }
  };

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
                to={"/our-teams"}
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
          <input
            type="text"
            name=""
            id="search"
            onChange={(e) => findProd(e.target.value)}
            value={value}
          />
          <label htmlFor="search">
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </label>
          {findingProducts &&
            findingProducts.length > 0 &&
            value.length > 0 && (
              <div className={styles.catalog} ref={containerRef}>
                <ul>
                  {findingProducts.map((item) => (
                    <li key={item.id} onClick={() => setValue("")}>
                      <Link to={`/shop/${item.id}`}>
                        <div className={styles.prod_block}>
                          <div className={styles.offer_img}>
                            <img src={item.photo} alt="" />
                          </div>
                          <div>
                            <h6>{item.title}</h6>
                            <div className={styles.price_block}>
                              <p>${item.fullPrice}</p>
                              <p>${item.salePrice}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
