import Image from "next/image";
import bike from "../components/resource/Images/bike.png";
import bake from "../components/resource/Images/bake.png";
import delivered from "../components/resource/Images/delivered.png";
import paid from "../components/resource/Images/paid.png";

function Order() {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex  justify-center items-center flex-col p-10  min-w-[1000px]">
        <div className=" flex items-center flex-1  w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  6310777777...
                </td>
                <td>
                  <span>Rizvan Karimov</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Pizza
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  €18
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-6">
          <div className="relative flex flex-col items-center">
            <Image src={paid} alt="paid-image" width={40} height={40} />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col items-center animate-pulse">
            <Image src={bake} alt="bake-image" width={40} height={40} />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image src={bike} alt="bike-image" width={40} height={40} />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src={delivered}
              alt="delivered-image"
              width={40}
              height={40}
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;