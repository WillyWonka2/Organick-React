import Button from "../UI/Button/Button";

import { ErrorIcon } from "../../icons";

import styles from "../../styles/NotFound.module.css";

import NotFoundBg from "../../img/bg/notFound.png";
import ScrollToTopOnMount from "../Routes/ScrollToTopOnMount";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className={styles.error_page}
      style={{ backgroundImage: `url(${NotFoundBg})` }}
    >
      <ScrollToTopOnMount />
      <div>
        <ErrorIcon />
        <h1>Page not found</h1>
        <p>The page you are looking for doesn't exist or has been moved</p>
        <Link to={'/'}>
          <Button title={"Go to Homepage"} />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
