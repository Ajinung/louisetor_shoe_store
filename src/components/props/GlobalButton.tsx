import { FC } from "react";
import { buttonData } from "../../types";

const GlobalButton: FC<buttonData> = ({
  text,
  onclick,
  hoverBG,
  textCol,
  border,
  background,
  HovertextCol,
  paddingX,
  paddingY,
}) => {
  return (
    <div className="">
      <button
        className={`py-${paddingY} px-${paddingX} bg-${[
          background,
        ]} border-${border} border-[1px] capitalize transition-all ease-in duration-200 hover:bg-${[
          hoverBG,
        ]} hover:text-${[HovertextCol]} text-${[textCol]} `}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default GlobalButton;
