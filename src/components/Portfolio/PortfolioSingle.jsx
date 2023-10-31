import Subscribe from "../Subscribe/Subscribe";

import styles from "../../styles/Portfolio.module.css";

import carrotImg from "../../img/bg/portfolioCarrot.png";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ScrollToTopOnMount from "../Routes/ScrollToTopOnMount";
import NotFound from "../NotFound/NotFound";

const PortfolioSingle = () => {
  const params = useParams();
  const { portfolios } = useSelector(({ portfolios }) => portfolios);
  const portfolio = portfolios.filter(({ id }) => id === +params.id)[0];
  const navigate = useNavigate()

  if (!portfolio) {
    navigate('/404')
    return <NotFound/>
  }

  return (
    <>
    <ScrollToTopOnMount/>
      <div
        className={styles.head}
        style={{ backgroundImage: `url(${portfolio.bg})` }}
      ></div>
      <section className={styles.main_block}>
        <div className={styles.title_block}>
          <h1>{portfolio.title}</h1>
          <p>
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </p>
        </div>
        <div className={styles.more_info}>
          <ul>
            <li>
              <div className={styles.list_head}>
                <h6>Date </h6>
                <span>:</span>
              </div>

              <p>December 4, 2022</p>
            </li>
            <li>
              <div className={styles.list_head}>
                <h6>Client </h6>
                <span>:</span>
              </div>

              <p>Kevin Martin</p>
            </li>
            <li>
              <div className={styles.list_head}>
                <h6>Category </h6>
                <span>:</span>
              </div>

              <p>Agriculture , Eco</p>
            </li>
            <li>
              <div className={styles.list_head}>
                <h6>Service </h6>
                <span>:</span>
              </div>

              <p>Organic Products</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.second_block}>
        <h4>About The Farm:</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </p>
        <img src={carrotImg} alt="Carrot" />
        <p className={styles.photo_name}>The Organic Products</p>
        <h5>About The Farm:</h5>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </p>
      </section>
      <Subscribe />
    </>
  );
};

export default PortfolioSingle;
