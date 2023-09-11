import Subscribe from "../Subscribe/Subscribe";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSingleProduct } from "../../features/news/newsSlice";

import styles from "../../styles/RecentNews.module.css";
import { UserIcon } from "../../icons";

const SingleBlog = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
    window.scrollTo(0,0)
  }, [dispatch, params.id]);

  const { singleNew } = useSelector(({ news }) => news);
  return (
    <>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${singleNew.bg})` }}
      ></section>
      <div className={styles.blog_about}>
        <div className={styles.about_info}>
          <div className={styles.date}>
            <p>
              <span>Posted On:</span> {singleNew.posted}
            </p>
          </div>
          <div className={styles.author}>
            <p>
              <UserIcon /> By {singleNew.author}
            </p>
          </div>
        </div>
        <h1>{singleNew.title}</h1>
        <div className={styles.subtitle}>
          <p>
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </p>
        </div>
      </div>
      <div className={styles.content_container}>
        <p>
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <h2>Preferred Form of Vitamin D?</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ul>
          <li>
          <span className = {styles.round}></span> Publishing packages and web pageLorem Ipsum as their defaults
          </li>
          <li> <span className = {styles.round}></span> Content here, content here', making it look like readables</li>
          <li> <span className = {styles.round}></span> Packages and web pageLorem Ipsum as their defaults</li>
        </ul>
        <div className={styles.quote}>
          <h6>
            “The first rule of any organic used in a business is that nature
            applied to an efficient operation will magnify the efficiency. The
            second is that organic applied to an inefficient operation will
            magnify the health.”
          </h6>
        </div>
        <h4>Make perfect organic product with us</h4>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ol>
          <li>1. Publishing packages and web pageLorem Ipsum as their default</li>
          <li>2. Content here, content here', making it look like readable</li>
          <li>3. Packages and web pageLorem Ipsum as their default</li>
          <li>4. more-or-less normal distribution of letters</li>
        </ol>
      </div>
      <Subscribe />
    </>
  );
};

export default SingleBlog;
