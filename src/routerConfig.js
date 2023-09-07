import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/about";
import HomePage from "./components/home";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./theme/masterLayout";
import ContactPage from "./components/contact";
import DetailPage from "./components/detail/detail";

const renderRouter = () => {
  const pageRouter = [
    {
      path: ROUTERS.PAGE.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.PAGE.ABOUT,
      component: <AboutPage />,
    },
    {
      path: ROUTERS.PAGE.CONTACT,
      component: <ContactPage />,
    },
    {
      path: ROUTERS.PAGE.DETAILS,
      component: <DetailPage />,
    },
    // {
    //     path: ROUTERS.PAGE.NEWS,
    //     component: <new
    // }
  ];
  return (
    <MasterLayout>
      <Routes>
        {pageRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderRouter();
};
export default RouterCustom;
