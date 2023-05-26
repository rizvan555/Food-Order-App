import React from "react";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/register";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function Register() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      fullEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
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
      onBlur: formik.handleBlur,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.password,
      onBlur: formik.handleBlur,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: formik.values.confirmPassword,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.confirmPassword,
      onBlur: formik.handleBlur,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 mx-auto w-full"
        onSubmit={formik.handleSubmit}
      >
        <Title className="text-[40px] mb-6">Register</Title>
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
            REGISTER
          </button>
          <Link href="/auth/login">
            <span className="text-[20px] underline text-gray-600">
              Do you have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
