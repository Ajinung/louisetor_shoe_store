import About from "./About";
import Featured from "./Featured";
import Hero from "./Hero";
import Products from "./Products";
import Statistics from "./Statistics";
import Subscribe from "./Subscribe";

const Homescreen = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <About />
      <Products />
      <Products />
      <Statistics />
      <Subscribe />
    </div>
  );
};

export default Homescreen;
