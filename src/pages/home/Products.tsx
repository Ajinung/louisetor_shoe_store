import SingleProduct from "../../components/blocks/SingleProduct";
import prodIMg from "../../assets/1.png";
import prodIMg1 from "../../assets/2.png";
import prodIMg2 from "../../assets/33.png";
import prodIMg3 from "../../assets/4.png";

const Products = () => {
  const sampleProd = [
    {
      title: "2020 men's Chelsea short boots",
      price: "N30000",
      promo: "N60000",
      thumbnail: prodIMg,
    },
    {
      title: "2023 Men's chelsea boots",
      price: "N35000",
      thumbnail: prodIMg1,
    },
    {
      title: "White martin boots men's spring",
      price: "N50000",
      promo: "N80000",
      thumbnail: prodIMg2,
    },
    {
      title: "2023 women's avocado boots",
      price: "N50000",
      promo: "N80000",
      thumbnail: prodIMg3,
    },
  ];

  return (
    <div className="w-full min-h-[95vh] max-h-full  grid place-items-center">
      <div className="w-[95%] h-[95%]  grid grid-cols-4 gap-2 max-xl:grid-cols-2">
        {sampleProd.map((el: any) => (
          <SingleProduct
            title={el.title}
            price={el.price}
            promo={el.promo}
            thumbnail={el.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
