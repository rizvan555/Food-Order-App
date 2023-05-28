import Image from "next/image";
import client2 from "../components/resource/Images/client2.jpg";
import { AiFillHome } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { FaMotorcycle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { profileSchema } from "@/schema/profile";
import { useFormik } from "formik";

function Profile() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      job: "",
      adress: "",
      fullEmail: "",
      phoneNumber: "",
      bio: "",
    },
    validationSchema: profileSchema,
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
      id: 3,
      name: "job",
      type: "text",
      placeholder: "Your job",
      value: formik.values.job,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.job,
      touched: formik.touched.job,
      onBlur: formik.handleBlur,
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
      onBlur: formik.handleBlur,
    },

    {
      id: 5,
      name: "adress",
      type: "text",
      placeholder: "Your Adress",
      value: formik.values.adress,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.adress,
      touched: formik.touched.adress,
      onBlur: formik.handleBlur,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: formik.values.bio,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.bio,
      touched: formik.touched.bio,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)]">
      <div className=" border w-80 flex-shrink-0">
        <div className="relative flex flex-col items-center p-10 py-5">
          <Image
            src={client2}
            alt="client2"
            width={100}
            height={100}
            className=" rounded-full"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <div className="font-semibold">
          <div className="flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5">
            <AiFillHome />
            <button>Account</button>
          </div>
          <div className="flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5">
            <GoKey />
            <button>Password</button>
          </div>
          <div className="flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5">
            <FaMotorcycle />
            <button>Orders</button>
          </div>
          <div className="flex items-center gap-2 border w-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all px-5">
            <ImExit />
            <button>Exit</button>
          </div>
        </div>
      </div>
      <form className="p-8 flex-1" onSubmit={formik.handleSubmit}>
        <Title className="text-[40px]">Account Settings</Title>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {inputs.map((input) => {
            return (
              <Input
                key={input.id}
                {...input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            );
          })}
        </div>
        <button className="btn-primary w-40 mt-10" type="onSubmit">
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
