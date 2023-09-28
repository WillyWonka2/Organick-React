import { Routes, Route } from "react-router";
// import { ROUTES } from "../../util/ROUTES.JS";
import ROUTES from "../../util/routes";
import Home from "../Home/Home";
import ShopSingle from "../ShopSingle/ShopSingle";
import AboutUs from "../AboutUs/AboutUs";
import RecentNews from "../RecentNews/RecentNews";
import SingleBlog from "../SingleBlog/SingleBlog";
import NotFound from "../NotFound/NotFound"
import Shop from "../Shop/Shop";
import Portfolio from "../Portfolio/Portfolio";
import PortfolioSingle from "../Portfolio/PortfolioSingle";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import QulityStandart from "../QualityStandart/QulityStandart";
import OurTeams from "../OurTeams/OurTeams";
import ContactUs from "../ContactUs/ContactUs";


const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.SHOP_SINGLE} element={<ShopSingle />} />
      <Route path={ROUTES.ABOUT} element={<AboutUs />} />
      <Route path={ROUTES.NEWS} element={<RecentNews />} />
      <Route path={ROUTES.SINGLE_BLOG} element={<SingleBlog />} />
      <Route path={ROUTES.SHOP} element={<Shop />} />
      <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
      <Route path={ROUTES.SINGLE_PORTFOLIO} element={<PortfolioSingle/>} />
      <Route path={ROUTES.SERVICE} element={<ServiceComponent/>} />
      <Route path={ROUTES.QUALITY_STANDART} element={<QulityStandart/>}/>
      <Route path={ROUTES.OUR_TEAMS} element={<OurTeams/>}/>
      <Route path={ROUTES.CONTACT_US} element={<ContactUs/>} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path={ROUTES.FAVORITES} element={<Favourites />} />  */}
    </Routes>
  );
};

export default AppRoutes;
