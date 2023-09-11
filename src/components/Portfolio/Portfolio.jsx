import DefaultHero from "../DefaultHero/DefaultHero";
import Subscribe from "../Subscribe/Subscribe";

import portfolioBgImg from "../../img/bg/portfolioBg.png";

import styles from "../../styles/Portfolio.module.css";
import { useSelector } from "react-redux";
import { PlayIcon } from "../../icons";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { portfolios } = useSelector(({ portfolios }) => portfolios);
  console.log(portfolios);
  return (
    <>
      <DefaultHero title={"Portfolio Standard"} mainBg={portfolioBgImg} />
      <section className={styles.container}>
        <div className = {styles.portfolios_container}>
          {portfolios.map((item) => (
            <div key={item.id} className = {styles.portfolio_block}>
              <div className = {styles.block_img} style={{backgroundImage: `url(${item.bg})`}}>

                <div className = {styles.block_hover}>
                  <PlayIcon/>
                  <Link to={`/portfolio/${item.id}`}/>
                </div>
              </div>
              <h6>{item.title}</h6>
              <p className="subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Portfolio;
