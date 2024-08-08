import { Outlet, useLocation } from "react-router-dom";
import SlideBar from "../components/SlideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutMain = () => {
  const location = useLocation();

  const isSearchRoute = location.pathname === "/search";

  return (
    <>
      <div className="flex bg-black-1000">
        <SlideBar />
        <div className="w-full ">
          <div className="text-white h-16 bg-black-1001 mt-2 rounded-lg">
            {isSearchRoute ? (
              <Header search={true} />
            ) : (
              <Header search={false} />
            )}
          </div>
          <Outlet />
          <footer className="w-full">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default LayoutMain;
