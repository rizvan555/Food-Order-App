import React from "react";
import Title from "../components/resource/Title";
import Input from "../components/forms/Input";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

function Login() {
  const { data: session } = useSession();
  // console.log(session); //heqiqeten de giris edib etmediyini yoxlayir ve giris ederken sene daxil olan shexsin butun melumatlarini oturur.

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    // actions.resetForm();
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
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: formik.values.email,
      onChange: formik.handleChange,
      errorsMessage: formik.errors.email,
      onBlur: formik.handleBlur,
      touched: formik.touched.email,
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
      touched: formik.touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 mx-auto w-full"
        onSubmit={formik.handleSubmit}
      >
        <Title className="text-[40px] mb-6">Login</Title>
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
          <button
            className="btn-primary !bg-secondary flex items-center justify-center mb-8 "
            type="button"
            onClick={() => signIn("github")}
          >
            <FaGithub />
            GITHUB
          </button>
          <Link href="/auth/register">
            <span className="text-[20px] underline text-gray-600">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
