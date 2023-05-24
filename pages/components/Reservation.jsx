import Input from "./forms/Input";
import Title from "./resource/Title";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Name",
    },
    {
      id: 3,
      name: "fullEmail",
      type: "email",
      placeholder: "Your Email Address",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How many persons",
    },
    {
      id: 5,
      name: "fullDate",
      type: "datetime-local",
      placeholder: "Your Date",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title className=" text-[40px] mb-10">Book A Table</Title>
      <div className=" flex justify-between gap-10 flex-wrap-reverse">
        <div className="lg:flex-1 w-full">
          <div className=" flex flex-col gap-y-3">
            {inputs.map((input) => {
              return <Input key={input.id} {...input} />;
            })}
          </div>
          <button className="btn-primary mt-4">Book Now</button>
        </div>
        <div className="lg:flex-1 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.3146840808126!2d7.773327341061286!3d49.47856245698245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479612664fb47f6f%3A0xd33b0d6811b6130c!2sErlenbacher%20Str.%2C%2067659%20Kaiserslautern!5e0!3m2!1sde!2sde!4v1684931221729!5m2!1sde!2sde"
            className="md:w-[600px] w-[370px] md:h-[360px] h-[200px] "
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
