import GlobalButton from "../../components/props/GlobalButton";

const About = () => {
  return (
    <div className="w-full h-[80vh] bg-black relative mt-2">
      <video
        loop
        autoPlay
        muted
        poster="//cdn.shopify.com/s/files/1/1994/2499/files/preview_images/e3aa070ad21b4c6883b6930ba96a1042.thumbnail.0000000000_small.jpg?v=1672902169"
        src="https://cdn.shopify.com/videos/c/vp/e3aa070ad21b4c6883b6930ba96a1042/e3aa070ad21b4c6883b6930ba96a1042.HD-1080p-4.8Mbps-11540404.mp4"
        className="w-full h-full object-cover "
      ></video>
      <div className="w-full h-full bg-[#00000072] absolute top-0 left-0 flex justify-center items-center flex-wrap gap-2">
        {/* first box */}
        <div className=" h-[90%] w-[90%] text-center  flex justify-center flex-col gap-6 items-center">
          <h1 className="uppercase flex items-center text-white font-bold text-4xl max-md:text-xl">
            These boots were made for ... <br /> (fill in blank)
          </h1>
          <div className="flex justify-center gap-3 flex-wrap ">
            <GlobalButton
              text="shop her boots"
              textCol="black"
              border="transparent"
              paddingX="5"
              paddingY="4"
              HovertextCol="white"
              background="white"
              hoverBG="black"
            />
            <GlobalButton
              text="shop for kids"
              textCol="black"
              border="transparent"
              paddingX="5"
              paddingY="4"
              HovertextCol="white"
              background="white"
              hoverBG="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
