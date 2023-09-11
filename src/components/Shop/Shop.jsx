import ScrollToTopOnMount from "../Routes/ScrollToTopOnMount";
import Subscribe from "../Subscribe/Subscribe";
import DefaultHero from "../DefaultHero/DefaultHero";
import ProductsList from "../ProductsList/ProductsList";
import Pagination from "../Pagination/Pagination";

import styles from "../../styles/Pagination.module.css";

import ShopBgImg from "../../img/bg/shopBg.png";

import { useSelector } from "react-redux";
import { useRef, useState } from "react";

const Shop = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const { list } = useSelector(({ products }) => products);
  let newArr = list;
  const listAmount = 12;
  const paginationBtn = Array.from(
    { length: Math.ceil(list.length / listAmount) },
    (_, index) => index + 1
  );

  const scrollBlock = useRef(null);

  const changeArr = () => {
    let firstItem = activeBtn * listAmount - listAmount;
    let lastItem = activeBtn * listAmount;
    if (newArr.length > listAmount - 1) {
      newArr = list.slice(firstItem, lastItem);
    } else {
      newArr = list.slice(firstItem, list.length);
    }
  };

  const onBtnClick = (num) => {
    setActiveBtn(num);
    changeArr();
    if (scrollBlock.current) {
      scrollBlock.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  changeArr();

  return (
    <>
      <ScrollToTopOnMount />
      <DefaultHero title={"Shop"} mainBg={ShopBgImg} />
      <div className={styles.container} ref={scrollBlock}>
        <ProductsList list={newArr} amount={listAmount} rowGap={40} />
      </div>
      {paginationBtn.length > 1 && (
        <Pagination
          btnArr={paginationBtn}
          active={activeBtn}
          onClick={onBtnClick}
        />
      )}

      <Subscribe />
    </>
  );
};

export default Shop;
