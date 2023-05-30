import Image from "next/image";
import React from "react";
import f1 from "../components/resource/Images/f1.png";
import Title from "../components/resource/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "@/redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className=" min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className=" min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => {
                return (
                  <tr
                    className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                    key={product.id}
                  >
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                      <Image src={f1} alt="cartImage" width={50} height={50} />
                      <span>{product.name}</span>
                    </td>
                    <td className="py-4 px-6 font-medium white-nowrap hover:text-white">
                      {product.extras.map((item) => {
                        return <span key={product.id}>{item.name},</span>;
                      })}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      {product.price}
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                      {product.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 md:w-auto w-full   md:text-start !text-center">
          <Title className="text-[40px]">CART TOTAL</Title>
          <div className="mt-6">
            <b>Subtotal: € {cart.totalPrice}</b>
            <br />
            <b className="my-1 inline-block text-red-500">Discount:</b> € 0.00{" "}
            <br />
            <b className="text-green-500">Total:</b> € {cart.totalPrice}
          </div>
          <button
            className="btn-primary mt-4"
            onClick={() => dispatch(reset())}
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
