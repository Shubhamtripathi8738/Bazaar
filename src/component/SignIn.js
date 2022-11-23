import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getSignIn } from "../Store/Action";

const SignIn=()=> {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch=useDispatch();
  const onSubmit = (data) => {
    getSignIn(dispatch,data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <label htmlFor="password">password</label>
      <input
        id="password"
        {...register("password", {
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default SignIn;