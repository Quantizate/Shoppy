import { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import Hero from "./Hero";
import ProductCard from "./ProductCard";
import Categories from "../pages/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Hero />
      <FeatureCard />
      <Categories />
      <div className="flex flex-col text-center w-full mt-16">
        <h2 className="text-m text-blue-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Our Most Popular Picks
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          {" "}
          loading...{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
