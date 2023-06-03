import React from "react";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/register";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Register() {
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      if (res.status === 200) {
        toast.success("User created successfully");
        push("/auth/login");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
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
      touched: formik.touched.fullName,
      onBlur: formik.handleBlur,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: formik.values.email,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.email,
      touched: formik.touched.email,
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
      touched: formik.touched.password,
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
      touched: formik.touched.confirmPassword,
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
