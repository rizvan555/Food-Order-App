import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required("Location is required"),
  phoneNumber: Yup.string().min(10, "Must be at least 3 characters"),
  fullEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  description: Yup.string().required("Description is required"),
  day: Yup.string().required("Day is required"),
  time: Yup.string().required("Time is required"),
});
