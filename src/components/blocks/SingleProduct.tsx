import { FC } from "react";
import { singleProductData } from "../../types";

const SingleProduct: FC<singleProductData> = ({
  title,
  price,
  promo,
  thumbnail,
}) => {
  return (
    <div className="flex flex-col gap-4 max-xl:mb-4">
      {/* product image */}
      <div className="w-full h-[90%] bg-[#F1F1F1] px-5 py-2 flex items-end justify-center hover:shadow-md transition-all ease-in duration-150">
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          className="w-[80%] h-[80%] object-contain hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      {/* product name */}
      <div className="w-full h-[5%]  flex items-center max-md:pt-1">
        <p className="font-medium max-md:text-xs capitalize">{title}</p>
      </div>

      {/* product price */}
      <div className="w-full h-[5%] flex items-center gap-2 max-md:text-sm">
        {/* former price  */}
        <p className="line-through max-md:text-xs">{promo}</p>
        <p className="max-md:text-xs">{price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
