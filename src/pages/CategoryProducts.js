import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setProducts(data);
      });
  }, [name]);

  return (
    <div>
      {isPending ? (
        <div> Loading ... </div>
      ) : (
        <div>
          <div className="flex flex-col text-center w-full mt-16">
            <h2 className="text-m text-blue-500 tracking-widest font-medium title-font mb-1">
              {name}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Our Most Popular Picks
            </h1>
          </div>
          <ProductCard products={products} />
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
