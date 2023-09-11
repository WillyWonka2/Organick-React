import Subscribe from "../Subscribe/Subscribe";
import DefaultHero from "../DefaultHero/DefaultHero";

import styles from "../../styles/RecentNews.module.css";

import RecentBgImg from "../../img/bg/recentBg.png";
import WeeklyNews from "../Blog/WeeklyNews";
import { useSelector } from "react-redux";
import ScrollToTopOnMount from "../Routes/ScrollToTopOnMount"

const RecentNews = () => {

  const { list } = useSelector(({ news }) => news);
  return (
    <>
    <ScrollToTopOnMount/>
      <DefaultHero title={"Recent News"} mainBg={RecentBgImg} />
      <section className={styles.news}>
        <WeeklyNews amount={6} list={list} />
      </section>
      <Subscribe />
    </>
  );
};

export default RecentNews;
