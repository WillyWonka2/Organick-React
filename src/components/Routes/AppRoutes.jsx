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
      <Route path="*" element={<NotFound />} />
      {/* <Route path={ROUTES.FAVORITES} element={<Favourites />} />  */}
    </Routes>
  );
};

export default AppRoutes;
