import styles from "../../styles/Testimonial.module.css";
import CustomerImg from "../../img/bg/customer.png";
import { StarIcon } from "../../icons";
import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";

const Testimonial = () => {
  const btnArr = [0, 1, 2];
  const targetBlockRef = useRef(null);
  const [width, setWidth] = useState(1200);
  const [swiperCounter, setSwiperCounter] = useState(1);

  const handleSwipper = (item) => {
    setSwiperCounter(item);
  };

  setTimeout(()=>{
    if(swiperCounter === 2){
      setSwiperCounter(0)
    } else{
      setSwiperCounter(swiperCounter + 1)
    }
  }, 5000)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === targetBlockRef.current) {
          const newWidth = entry.contentRect.width;
          setWidth(newWidth);
        }
      }
    });

    if (targetBlockRef.current) {
      resizeObserver.observe(targetBlockRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <section className={styles.testimonial}>
      <p className="subtitle">Testimonial</p>
      <h2>What Our Customer Saying?</h2>
      <div className={styles.swipper_block} ref={targetBlockRef}>
        <div
          className={styles.swipper_container}
          style={{
            width: `${width * 3}px`,
            transform: `translateX(-${width * swiperCounter}px)`,
          }}
        >
          <div className={styles.item}>
            <div
              className={styles.customer_photo}
              style={{ backgroundImage: `url(${CustomerImg})` }}
            >
              <img src={CustomerImg} alt="Sara Taylor" />
            </div>
            <div className={styles.customer_raiting}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.customer_comment}>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
            <div className={styles.customer_name}>
              <h6>Sara Taylor</h6>
            </div>
            <div className={styles.customer_proffesion}>
              <p>Consumer</p>
            </div>
          </div>
          <div className={styles.item}>
            <div
              className={styles.customer_photo}
              style={{ backgroundImage: `url(${CustomerImg})` }}
            ></div>
            <div className={styles.customer_raiting}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.customer_comment}>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
            <div className={styles.customer_name}>
              <h6>Sara Taylor</h6>
            </div>
            <div className={styles.customer_proffesion}>
              <p>Consumer</p>
            </div>
          </div>
          <div className={styles.item}>
            <div
              className={styles.customer_photo}
              style={{ backgroundImage: `url(${CustomerImg})` }}
            ></div>
            <div className={styles.customer_raiting}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className={styles.customer_comment}>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
            <div className={styles.customer_name}>
              <h6>Sara Taylor</h6>
            </div>
            <div className={styles.customer_proffesion}>
              <p>Consumer</p>
            </div>
          </div>
        </div>
        <div className={styles.btn_block}>
          {btnArr.map((item) => (
            <div
              key={item}
              className={`${styles.swipper_controller} ${
                swiperCounter === item && styles.active_btn
              }`}
              onClick={() => {
                handleSwipper(item);
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.about_products_block}>
        <div className={styles.about_item}>
          <Counter targetNumber={100} content="%" speed={2}/>
          <p>Organic</p>
        </div>
        <div className={styles.about_item}>
          <Counter targetNumber={285} speed={200}/>
          <p>Active Product</p>
        </div>
        <div className={styles.about_item}>
          <Counter targetNumber={350} content="+" speed={20}/>
          <p>Organic Orchads</p>
        </div>
        <div className={styles.about_item}>
          <Counter targetNumber={25} content="+" speed={1}/>
          <p>Years of Farming</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
