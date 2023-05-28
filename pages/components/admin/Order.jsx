import React from "react";
import Title from "../resource/Title";

function Order() {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title className="text-[40px]">Order</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white  gap-x-1 ">
                <span>63107...</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Rizvan Karimov</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                €18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-success text-white px-4 py-1 rounded-[6px]">
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
