import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcategories(data);
      });
  }, []);

  return (
    <div>
      <CategoryCard categories={categories} />
    </div>
  );
};

export default Categories;
