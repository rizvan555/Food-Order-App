import React from "react";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { useFormik } from "formik";
import { adminSchema } from "@/schema/admin";
import Link from "next/link";

function Login() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: adminSchema,
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: formik.values.username,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.username,
      onBlur: formik.handleBlur,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.password,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 mx-auto w-full"
        onSubmit={formik.handleSubmit}
      >
        <Title className="text-[40px] mb-6">Admin Login</Title>
        <div className=" flex flex-col gap-y-6 w-full">
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
        <div className="flex flex-col gap-y-3 mt-8 w-full ">
          <button className="btn-primary" type="submit">
            LOGIN
          </button>
          <Link href="/">
            <span className="text-[20px] underline text-gray-600">
              Home Page
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
