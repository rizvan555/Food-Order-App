import { reservationSchema } from "@/schema/reservation";
import Input from "./forms/Input";
import Title from "./resource/Title";
import { useFormik } from "formik";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({
      // initialValues: {
      //   fullName: "",
      //   phoneNumber: "",
      //   fullEmail: "",
      //   persons: "",
      //   fullDate: "",
      // },
    });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      fullEmail: "",
      persons: "",
      fullDate: "",
    },
    validationSchema: reservationSchema,
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: formik.values.fullName,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
      onBlur: formik.handleBlur,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Name",
      value: formik.values.phoneNumber,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
      onBlur: formik.handleBlur,
    },
    {
      id: 3,
      name: "fullEmail",
      type: "email",
      placeholder: "Your Email Address",
      value: formik.values.fullEmail,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.fullEmail,
      touched: formik.touched.fullEmail,
      onBlur: formik.handleBlur,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How many persons",
      value: formik.values.persons,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.persons,
      touched: formik.touched.persons,
      onBlur: formik.handleBlur,
    },
    {
      id: 5,
      name: "fullDate",
      type: "datetime-local",
      placeholder: "Your Date",
      value: formik.values.fullDate,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.fullDate,
      touched: formik.touched.fullDate,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title className=" text-[40px] mb-10">Book A Table</Title>
      <div className=" flex justify-between gap-10 flex-wrap-reverse">
        <form className="lg:flex-1 w-full" onSubmit={formik.handleSubmit}>
          <div className=" flex flex-col gap-y-3">
            {inputs.map((input) => {
              return (
                <Input
                  key={input.id}
                  {...input}a
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              );
            })}
          </div>
          <button type="submit" className="btn-primary mt-4">
            Book Now
          </button>
        </form>
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
