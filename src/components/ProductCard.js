import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4 space-x-18 justify-center">
          {products.map((product) => {
            const { id, title, price, description, category, image } = product;
            return (
              <Link
                to={`/product/${id}`}
                className="rounded-lg lg:w-1/4 md:w-1/2 p-4 w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-5 mx-10 border-width-6 border-zinc-800 duration-300 ease-in-out hover:opacity-60 hover:shadow-lg dark:hover:shadow-black/30"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
