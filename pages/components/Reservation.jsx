import Input from "./forms/Input";
import Title from "./resource/Title";

const Reservation = () => {
  return (
    <div className="container mx-auto py-12">
      <div className=" flex justify-between items-center gap-x-10 flex-wrap">
        <div className="flex-1 flex-col">
          <Title className=" text-[40px] mb-10">Book A Table</Title>
          <div className=" flex flex-col gap-y-3 w-full">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <button className="btn-primary mt-4">Book Now</button>
        </div>
        <div className="md:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.3146840808126!2d7.773327341061286!3d49.47856245698245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479612664fb47f6f%3A0xd33b0d6811b6130c!2sErlenbacher%20Str.%2C%2067659%20Kaiserslautern!5e0!3m2!1sde!2sde!4v1684931221729!5m2!1sde!2sde"
            width="600"
            height="360"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
