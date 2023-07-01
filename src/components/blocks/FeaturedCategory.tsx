import { FC } from "react";
import GlobalButton from "../props/GlobalButton";
import { featuredCategoryData } from "../../types";

const FeaturedCategory: FC<featuredCategoryData> = ({
  title,
  text,
  textCol,
  description,
  caption,
  hoverBG,
  border,
  image,
  HovertextCol,
  background,
  paddingX,
  paddingY,
}) => {
  return (
    <div className="bg-black w-full  relative">
      <img src={image} alt="" loading="lazy" className="w-full  object-cover" />
      <div className="w-full h-full absolute top-0 left-0 flex items-end bg-[#00000091]">
        {/* card description */}

        <div className=" flex flex-col gap-6 p-10 text-white max-md:p-5 max-md:gap-2">
          <p className="tracking-[6px] leading-tight text-[12px] max-sm:text-[10px] max-md:tracking-[3px]">
            {caption}
          </p>
          <h2 className="capitalize font-bold text-5xl max-md:text-lg max-lg:text-3xl">
            {title}
          </h2>
          <p className="max-md:text-[12.5px]">{description}</p>
          <GlobalButton
            text={text}
            hoverBG={hoverBG}
            textCol={textCol}
            border={border}
            HovertextCol={HovertextCol}
            background={background}
            paddingX={paddingX}
            paddingY={paddingY}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
