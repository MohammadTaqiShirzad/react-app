import { useState } from "react";
import Card from "../components/Card";
const products = [
  {
    id: 1,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Lexus",
    category: "4wd",
    price: 23000,
    description: "this is the best car in my store",
  },
  {
    id: 2,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Frunner",
    category: "armored",
    price: 23000,
    description: "this is the best car in my store",
  },
  {
    id: 3,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Prado",
    category: "4wd",
    price: 23000,
    description: "this is the best car in my store",
  },
  {
    id: 4,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Luxes",
    category: "luxury",
    price: 23000,
    description: "this is the best car in my store",
  },
  {
    id: 5,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Toyota",
    category: "luxury",
    price: 23000,
    description: "this is the best car in my store",
  },
  {
    id: 6,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Camera",
    category: "luxury",
    price: 23000,
    description: "this is the best computer in my store",
  },
  {
    id: 7,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "luxury car",
    category: "armored",
    price: 23000,
    description: "this is the best computer in my store",
  },
  {
    id: 8,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Armored car",
    category: "armored",
    price: 23000,
    description: "this is the best computer in my store",
  },
  {
    id: 9,
    imageUrl: "/armored-lexus-lx570-b7-2020.webp",
    name: "Armored car",
    category: "armored",
    price: 23000,
    description: "this is the best computer in my store",
  },
];

const Product = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
    console.log(prevVisibleProducts);
  };
  const handleShowLess = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts - 3);
  };
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col justify-start items-center">
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="w-28 bg-blue-900 text-white px-4 py-2 rounded-2xl cursor-pointer"
          onClick={() => setFilteredProducts(products)}
        >
          all
        </button>
        <button
          className="w-28 bg-blue-900 text-white px-4 py-2 rounded-2xl cursor-pointer"
          onClick={() =>
            setFilteredProducts(
              products.filter((product) => product.category === "4wd")
            )
          }
        >
          4wd
        </button>
        <button
          className="w-28 bg-blue-900 text-white px-4 py-2 rounded-2xl cursor-pointer"
          onClick={() =>
            setFilteredProducts(
              products.filter((product) => product.category === "armored")
            )
          }
        >
          armored
        </button>
        <button
          className="w-28 bg-blue-900 text-white px-4 py-2 rounded-2xl cursor-pointer"
          onClick={() =>
            setFilteredProducts(
              products.filter((product) => product.category === "luxury")
            )
          }
        >
          luxury
        </button>
      </div>
      <div className="w-11/12 my-10 mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-between items-start flex-wrap">
        {filteredProducts.slice(0, visibleProducts).map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
      {filteredProducts.length > 6 && (
        <div className="flex justify-center items-center gap-4 my-8">
          {visibleProducts < filteredProducts.length ? (
            <button
              type="button"
              onClick={handleShowMore}
              className="bg-blue-900 text-white px-8 py-3 cursor-pointer rounded-2xl mt-4 hover:bg-blue-700 transition-colors duration-300"
            >
              Show More
            </button>
          ) : (
            <button
              type="button"
              onClick={handleShowLess}
              className="bg-blue-900 text-white px-8 py-3 cursor-pointer rounded-2xl mt-4 hover:bg-blue-700 transition-colors duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
