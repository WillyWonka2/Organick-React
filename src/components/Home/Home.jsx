import Hero from "../Hero/Hero";
import News from "../News/News";
import Subscribe from "../Subscribe/Subscribe";
import About from "../About/About";
import OurProducts from "../OurProducts/OurProducts";
import Testimonial from "../Testimonial/Testimonial";
import Offers from "../Offers/Offers";
import EcoFriendly from "../EcoFriendly/EcoFriendly";
import Categories from "../Categories/Categories";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <main>
      <Hero />
      <News amount={4}/>
      <About/>
      <OurProducts/>
      <Testimonial/>
      <Offers/>
      <EcoFriendly/>
      <Categories/>
      <Blog/>
      <Subscribe />
    </main>
  );
};

export default Home;
