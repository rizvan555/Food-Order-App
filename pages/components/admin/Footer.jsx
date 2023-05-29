import React, { useState } from "react";
import Title from "../resource/Title";
import Input from "../forms/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaTwitter,
  FaTrashAlt,
} from "react-icons/fa";

function Footer() {
  const [lindAdress, setLinkAdress] = useState();
  const [iconName, setIconName] = useState();
  const [icons, setIcons] = useState([
    FaFacebook,
    FaInstagram,
    FaDiscord,
    FaTwitter,
  ]);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      location: "",
      fullEmail: "",
      phoneNumber: "",
      description: "",
      day: "",
      time: "",
    },
    validationSchema: footerSchema,
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your location",
      value: formik.values.location,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.location,
      touched: formik.touched.location,
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
      id: 4,
      name: "description",
      type: "text",
      placeholder: "Your description",
      value: formik.values.description,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.description,
      touched: formik.touched.description,
      onBlur: formik.handleBlur,
    },

    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update day",
      value: formik.values.day,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.day,
      touched: formik.touched.day,
      onBlur: formik.handleBlur,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update time",
      value: formik.values.time,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.time,
      touched: formik.touched.time,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={formik.handleSubmit}>
      <Title className="text-[40px]">Footer</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
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

      <div className="lg:flex justify-between items-center grid grid-cols-1 mt-4">
        <div className="flex items-center gap-4">
          <Input placeholder="Link Adress" value="https://" />
          <Input
            placeholder="Icon Name"
            onChange={(e) => setIconName(e.target.value)}
            defaultValue={iconName}
          />
          <button
            className="btn-primary"
            type="button"
            onClick={() => setIcons([...icons, iconName])}
          >
            Add
          </button>
        </div>
        <ul className="flex flex-wrap gap-6 lg:w-[20vw] lg:ml-20 w-[80vw] lg:mt-0 mt-10">
          {icons.map((IconComponent, index) => {
            return (
              <li className="flex items-center gap-1" key={index}>
                <IconComponent className="text-2xl" />
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => {
                    setIcons((prevIcons) =>
                      prevIcons.filter((item, myIndex) => myIndex !== index)
                    );
                  }}
                >
                  <FaTrashAlt />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="btn-primary w-40 mt-10" type="submit">
        Update
      </button>
    </form>
  );
}

export default Footer;
