import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";
import { useEffect, useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDecrease = (id) => {
    let toRemItem = false;
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          toRemItem = true;
        }
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    if (toRemItem) {
      const newCart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  return (
    <div>
      <div className="h-screen py-8 ">
        <div className="container mx-auto px-4">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-3/4">
                  <div className="bg-white rounded-lg border-[2px] border-gray-100 shadow-lg p-6 mb-4">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left font-semibold">Product</th>
                          <th className="text-left font-semibold">Price</th>
                          <th className="text-left font-semibold">Quantity</th>
                          <th className="text-left font-semibold w-30">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => {
                          return (
                            <tr className="hover:bg-gray-50">
                              <td className="py-4">
                                <div className="flex items-center">
                                  <img
                                    className="h-24 w-24 mr-4 object-contain"
                                    src={item.image}
                                    alt="Product image"
                                  />
                                  <span className="font-medium max-w-sm text-sm">
                                    {item.title}
                                  </span>
                                </div>
                              </td>
                              <td className="py-2">${item.price}</td>
                              <td className="py-4">
                                <div className="flex items-center">
                                  <button
                                    className="border rounded-md py-2 px-4 mr-2"
                                    onClick={() => handleDecrease(item.id)}
                                  >
                                    -
                                  </button>
                                  <span className="text-center w-8">
                                    {item.quantity}
                                  </span>
                                  <button
                                    className="border rounded-md py-2 px-4 ml-2"
                                    onClick={() => handleIncrease(item.id)}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="py-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <Link to="/products" className="ml-4 mt-8 flex flex-wrap">
                    <svg
                      // style="color: rgb(47, 86, 244);"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="m-0.5 mr-[8px]"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        fill="#2f56f4"
                      ></path>{" "}
                    </svg>
                    <p className="text-md text-blue-600">Go back to shopping</p>
                  </Link>
                </div>
                <div className="md:w-1/4">
                  <div className="bg-white shadow-lg p-6 rounded-lg border-[2px] border-gray-100 shadow-gray-400/40 ">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes</span>
                      <span>${(total / 10).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Shipping</span>
                      <span>$0.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">
                        ${(total + total / 10).toFixed(2)}
                      </span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full ">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
