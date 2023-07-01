import { useState } from "react";
import { BiShoppingBag, BiSearch, BiUser } from "react-icons/bi";
import { CgMenuGridR, CgClose } from "react-icons/cg";

const Header = () => {
  const [colour, setColour] = useState<boolean>(false);
  const [dropDown, setdropDown] = useState<boolean>(false);

  const scroll = () => {
    if (window.scrollY >= 10) {
      setColour(true);
    } else {
      setColour(false);
    }
  };

  const shownav = () => {
    setdropDown(!dropDown);
  };

  window.addEventListener("scroll", scroll);

  return (
    <div
      className={`w-full h-[12vh] ${
        colour
          ? "bg-white "
          : "bg-transparent text-white border-b border-[#ffffffab]"
      } transition-all ease-in-out duration-200 fixed z-50 flex items-center justify-center hover:bg-white hover:text-black`}
    >
      {/* nav holder */}
      <div className="w-[95%] h-[90%] flex items-center justify-between ">
        {/* mobile menu */}
        <div
          className="lg:hidden text-3xl cursor-pointer transition-all ease-in-out duration-200 z-20"
          onClick={shownav}
        >
          {dropDown ? <CgClose /> : <CgMenuGridR />}
        </div>

        {/* mobile dropdown */}
        {dropDown ? (
          <div className="lg:hidden h-[88vh] w-[100%] py-6 px-5 bg-white text-black absolute top-[12vh] left-0">
            <nav className="flex flex-col capitalize gap-4">
              <p>
                <a href="#">Home</a>
              </p>
              <hr />
              <p>
                <a href="#">Men's boots</a>
              </p>
              <hr />
              <p>
                <a href="#">women's boots</a>
              </p>
              <hr />
              <p>
                <a href="#">shoe care</a>
              </p>

              <hr />

              <div className="absolute bottom-5 left-5">
                <p className=" py-4">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2"
                  >
                    <BiUser />
                    Login
                  </a>
                </p>
                <p className=" text-xs lowercase">© Louis Etor</p>
              </div>
            </nav>
          </div>
        ) : null}

        {/* logo and nav */}
        <div className="flex items-center justify-between gap-10 ">
          <h2 className="text-4xl font-black max-md:text-2xl max-sm:text-lg">
            Louis Etor
          </h2>
          <nav className="flex gap-6 max-lg:hidden capitalize">
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">Men's boots</a>
            </p>
            <p>
              <a href="#">women's boots</a>
            </p>
            <p>
              <a href="#">shoe care</a>
            </p>
          </nav>
        </div>

        {/* auth and cart */}
        <div className="flex items-center justify-center gap-[10px] capitalize  ">
          <p className="max-lg:hidden">
            <a href="#">Login</a>
          </p>
          <p className="text-xl">
            <a href="#">
              <BiSearch />
            </a>
          </p>
          <p className="text-xl flex items-center justify-center gap-1 cursor-pointer">
            <BiShoppingBag />

            <div
              className={`h-[18px] w-[18px] rounded-full flex items-center justify-center ${
                colour ? "text-white bg-black" : "text-black bg-white"
              } text-[10px] font-bold`}
            >
              0
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
