import { Link } from "react-router-dom";

const emptyCart = () => {
  return (
    <div className="flex flex-col max-w-screen-2xl items-center m-auto mb-20">
      <h1 className="">Your cart is empty</h1>
      <div className="empty-cart-img max-w-screen-sm">
        <img src="./empty_cart.jpg" alt="empty cart" />
      </div>
      <p>Looks like you haven't added any items to your cart yet.</p>
      <Link
        to={`/products`}
        class="p-2 m-4 text-lg bg-sky-100 text-blue-500 rounded-lg border hover:text-sky-100 hover:bg-blue-500 drop-shadow-md"
      >
        Explore Products
      </Link>
    </div>
  );
};

export default emptyCart;
