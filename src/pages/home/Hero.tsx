import GlobalButton from "../../components/props/GlobalButton";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        autoPlay
        loop
        muted
        // preload="metadata"
        poster="//cdn.shopify.com/s/files/1/1994/2499/files/preview_images/b36434e050e64a5896d36951682a2d9c.thumbnail.0000000000_small.jpg?v=1668439235"
        src="https://cdn.shopify.com/videos/c/vp/b36434e050e64a5896d36951682a2d9c/b36434e050e64a5896d36951682a2d9c.HD-1080p-7.2Mbps-10536242.mp4"
        className="h-full w-full object-cover"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000006f] grid place-items-center">
        <div className="w-[50%] h-[60%] text-white flex flex-col  items-center justify-end gap-4  max-lg:w-[95%]">
          <p className="uppercase leading-tight text-center tracking-[4px] max-sm:text-[12px]">
            a brand fit for kings & queens
          </p>
          <h2 className="text-[3.2rem] font-black text-center max-md:text-[2.5rem] max-sm:text-[1.7rem]">
            The Chelsea Boot Co Est. 1851
          </h2>
          <p className=" text-center leading-tight tracking-[2px] max-md:text-sm">
            "Probably the most comfortable boots you'll ever wear"
          </p>

          {/* action button */}
          <div className="flex gap-4 my-9 max-sm:gap-2">
            <GlobalButton
              text="shop women's"
              hoverBG="white"
              textCol="white"
              border="black"
              background="black"
              HovertextCol="black"
              paddingX="5"
              paddingY="4"
            />
            <GlobalButton
              text="shop men's"
              textCol="black"
              background="white"
              HovertextCol="white"
              hoverBG="black"
              border="white"
              paddingX="5"
              paddingY="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
