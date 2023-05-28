import React from "react";
import Title from "../resource/Title";
import Input from "../forms/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profile";

function Account() {
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
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={formik.handleSubmit}>
      <Title className="text-[40px]">Account Settings</Title>
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
      <button className="btn-primary w-40 mt-10" type="submit">
        Update
      </button>
    </form>
  );
}

export default Account;
