import { FiHeart } from "react-icons/fi";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdDeliveryDining, MdOutlineSupportAgent } from "react-icons/md";

const Statistics = () => {
  return (
    <div className="w-[90%] m-auto h-[30vh] grid place-items-center my-8 max-md:h-fit max-md:w-full">
      <div className="w-[95%] h-[95%]  grid grid-cols-4 gap-5 max-lg:grid-cols-2">
        <div className=" flex items-center gap-5 p-5 max-md:flex-col">
          {/* icon */}
          <div className="w-[25%] text-7xl flex items-center justify-center">
            <FiHeart />
          </div>

          {/* title and desc */}
          <div className="w-[75%]">
            <h1>#SHOP4ACAUSE</h1>
            <br />
            <p className="max-md:text-sm ">
              10% off every order would be donated to children affected with
              altruism.
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-5 p-5 max-md:flex-col">
          {/* icon */}
          <div className="w-[25%] text-7xl flex items-center justify-center">
            <MdDeliveryDining />
          </div>

          {/* title and desc */}
          <div className="w-[75%]">
            <h1>#SWIFT DELIVERY</h1>
            <br />
            <p className="max-md:text-sm ">
              Products bought are packaged and shipped immediately orders are
              confirmed.
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-5 p-5 max-md:flex-col">
          {/* icon */}
          <div className="w-[25%] text-7xl flex items-center justify-center">
            <MdOutlineSupportAgent />
          </div>

          {/* title and desc */}
          <div className="w-[75%]">
            <h1>#CUSTOMER SUPPORT</h1>
            <br />
            <p className="max-md:text-sm ">
              We don't use bots here. all your inquiries would be answered by a
              real person.
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-5 p-5 max-md:flex-col">
          {/* icon */}
          <div className="w-[25%] text-7xl flex items-center justify-center">
            <BsHandThumbsUp />
          </div>

          {/* title and desc */}
          <div className="w-[75%]">
            <h1>#QUALITY PRODUCT</h1>
            <br />
            <p className="max-md:text-sm ">
              We don't compromise on quality. you sure getting value for your
              money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
