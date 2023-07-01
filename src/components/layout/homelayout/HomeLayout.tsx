import { Outlet } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const HomeLayout = () => {
  return (
    <div className="full overflow-x-hidden">
      {/* header */}
      <header className="absolute w-full">
        <Header />
      </header>
      {/* body */}
      <main>
        <Outlet />
      </main>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
