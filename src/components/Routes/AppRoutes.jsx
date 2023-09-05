import { Routes, Route } from "react-router";
// import { ROUTES } from "../../util/ROUTES.JS";
import ROUTES from "../../util/routes";
import Home from "../Home/Home";
import ShopSingle from "../ShopSingle/ShopSingle";
import AboutUs from "../AboutUs/AboutUs";
import RecentNews from "../RecentNews/RecentNews";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.SHOP_SINGLE} element={<ShopSingle />} />
      <Route path={ROUTES.ABOUT} element={<AboutUs />} />
      <Route path={ROUTES.NEWS} element={<RecentNews />} />
      {/* <Route path={ROUTES.CART} element={<Cart />} /> */}
      {/* <Route path={ROUTES.FAVORITES} element={<Favourites />} />  */}
    </Routes>
  );
};

export default AppRoutes;
