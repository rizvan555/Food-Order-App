import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Full name is required"),
  phoneNumber: Yup.string().min(10, "Must be at least 3 characters"),
  job: Yup.string().min(3, "Must be at least 3 characters"),
  adress: Yup.string()
    .min(3, "Must be at least 3 characters")
    .required("Your adress is required"),
  fullEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bio: Yup.string().min(3, "Must be at least 3 characters"),
});
