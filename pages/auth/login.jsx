import React from "react";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function Login() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      fullEmail: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
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
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.password,
      touched: formik.touched.password,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20 md:w-1/2 mx-auto w-full">
        <Title className="text-[40px] mb-6">Login</Title>
        <div className=" flex flex-col gap-y-4 w-full">
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
          <button className="btn-primary !bg-secondary flex items-center justify-center mb-8 ">
            <FaGithub />
            GITHUB
          </button>
          <Link href="/auth/register">
            <span className="text-[20px] underline text-gray-600">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
