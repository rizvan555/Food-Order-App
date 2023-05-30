import Image from "next/image";
import f1 from "../components/resource/Images/f1.png";
import Title from "../components/resource/Title";
import { useState } from "react";
import { addProduct } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Extra-1",
    price: 1,
  },
  {
    id: 2,
    name: "Extra-2",
    price: 3,
  },
  {
    id: 3,
    name: "Extra-3",
    price: 5,
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const foodItems = [
    {
      id: 1,
      name: "Pizza Margarita",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, non? Beatae voluptatem culpa accusantium ea odio officia, autem atque corrupti quod ullam, iure dolores facilis voluptas inventore, ex deleniti ratione.",
      extraOptions: [
        {
          id: 1,
          name: "Extra-1",
          price: 1,
        },
      ],
    },
  ];

  const handleSize = (sizeIndex) => {
    //Sirasina gore mehsulun qiymetini secirsen ve ondan 0-i cixirsan. Aldigin netice necedirse sene o siradaki malin qiymetini cixarir.
    const differens = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(differens);
  };

  const changePrice = (count) => {
    setPrice(price + count);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const handleClick = (e) => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };

  return (
    <div className=" flex items-center gap-5 py-20 flex-wrap md:h-[calc(100vh_-_88px)]">
      <div className=" relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src={f1} width={500} alt="" objectFit="contain" />
      </div>
      <div className=" md:flex-1 md:text-start text-center">
        <Title className=" text-6xl">Good Pizza</Title>
        <span className=" text-primary underline underline-offset-1 my-4 inline-block font-bold text-2xl">
          € {price}
        </span>
        <p className=" text-sm my-4 md:pr-24 pr-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          non? Beatae voluptatem culpa accusantium ea odio officia, autem atque
          corrupti quod ullam, iure dolores facilis voluptas inventore, ex
          deleniti ratione.
        </p>
        <div>
          <h4 className=" font-bold text-xl">Choose the size</h4>
          <div className=" flex items-center gap-20 md:justify-start justify-center">
            <div
              className="relative flex cursor-pointer"
              onClick={() => handleSize(0)}
            >
              <Image src={f1} alt="" width={50} />
              <h6 className="absolute top-0 left-6 bg-primary px-3 rounded-xl text-xs">
                Small
              </h6>
            </div>
            <div
              className="relative flex cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image src={f1} alt="" width={80} />
              <h6 className="absolute top-0 left-8 bg-primary px-3 rounded-xl text-xs">
                Medium
              </h6>
            </div>
            <div
              className="relative flex cursor-pointer"
              onClick={() => handleSize(2)}
            >
              <Image src={f1} alt="" width={110} />
              <h6 className="absolute top-0 right-0 bg-primary px-3 rounded-xl text-sm">
                Large
              </h6>
            </div>
          </div>
        </div>
        <div className=" flex gap-x-4 mt-6 md:justify-start justify-center">
          {extraItems.map((item) => (
            <label className="flex items-center gap-x-1" key={item.id}>
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
                onChange={(e) => handleChange(e, item)}
              />
              <span className=" text-sm font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
        <button
          className="flex btn-primary my-6 w-40 md:mx-0 mx-auto"
          onClick={handleClick}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Index;
