import GlobalButton from "../../components/props/GlobalButton";
import ladies from "../../assets/Ladies.jpg";
import gents from "../../assets/gents.jpg";
import FeaturedCategory from "../../components/blocks/FeaturedCategory";

const Featured = () => {
  return (
    <div className=" w-[95%]  m-auto flex flex-col gap-3 max-md:gap-8">
      {/* feature categories */}
      <div className="w-full  mt-8 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <FeaturedCategory
          image={ladies}
          caption="A BRAND FIT FOR A QUEEN"
          title="WOMEN'S BOOTS"
          description="Imagine walking in Queen Victoria's boots"
          text="explore"
          hoverBG="white"
          textCol="black"
          border="none"
          HovertextCol=""
          background="white"
          paddingX="5"
          paddingY="2"
        />

        {/* second featured */}
        <FeaturedCategory
          image={gents}
          caption="A LITTLE ROCK & ROLL"
          title="MEN'S BOOTS"
          description="Probably the most comfortable boots you'll ever wear"
          text="explore"
          hoverBG="black"
          textCol="black"
          border="none"
          HovertextCol=""
          background="white"
          paddingX="5"
          paddingY="2"
        />
      </div>

      {/* explore more categories button */}
      <div className="w-full h-[25%] mb-8 grid place-items-center gap-3 mt-5 max-md:mt-0">
        <h2 className="text-black capitalize font-semibold text-3xl max-md:text-2xl">
          Browse all categories
        </h2>
        <GlobalButton
          text="explore all"
          hoverBG="white"
          textCol="black"
          border="#000"
          HovertextCol="transparent"
          background="white"
          paddingX="5"
          paddingY="2"
        />
      </div>
    </div>
  );
};

export default Featured;
