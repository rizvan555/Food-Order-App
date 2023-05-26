import * as Yup from "yup";

function getCharacterValidationError(characterType) {
  return `Password must contain at least one ${characterType} character`;
}

export const loginSchema = Yup.object({
  fullEmail: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .required("Password is required"),
});
