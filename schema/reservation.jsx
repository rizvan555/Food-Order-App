import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Full name is qequired"),
  phoneNumber: Yup.string().min(10, "Must be at least 3 characters"),
  fullEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  persons: Yup.string().required("Persons is required"),
  fullDate: Yup.string().required("date is required"),
});
