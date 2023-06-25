import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Categories from "./Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Categories />
      {isPending ? (
        <div> Loading ... </div>
      ) : (
        <div>
          <div className="flex flex-col text-center w-full mt-16">
            <h2 className="text-m text-blue-500 tracking-widest font-medium title-font mb-1">
              Products
            </h2>
            <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">
              All Products
            </h1>
          </div>
          <ProductCard products={products} />
        </div>
      )}
    </div>
  );
};

export default Products;
