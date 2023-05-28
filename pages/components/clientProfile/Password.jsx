import React from "react";
import Title from "../resource/Title";
import Input from "../forms/Input";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";

function Password() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confrimPassword: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password Again",
      value: formik.values.password,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.password,
      touched: formik.touched.password,
      onBlur: formik.handleBlur,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "New Password Again",
      value: formik.values.confirmPassword,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.confirmPassword,
      touched: formik.touched.confirmPassword,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={formik.handleSubmit}>
      <Title className="text-[40px]">Password</Title>
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

export default Password;
