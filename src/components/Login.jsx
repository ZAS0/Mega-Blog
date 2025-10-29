import { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Logo, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [ error, setError ] = useState("");

  const login = async (data) => {
    setError(""); // A good practice whenever a user log's in then the error should be cleared.A good practice
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8"> {/*read about handleSubmit below.*/}
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", { //why ...register?see below
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

/* About handleSubmit(login)?
Ans:- handleSubmit() ek event jaisa hai isliye humlog iska method alag sei na likh k ismei ek method
k refference pass krte hai.mtlb jabhi form submit hoga then humlog ismei apna method degay.
aur ek cheez handleSubmit() state bhi manage kreaga jo methods k variable hai unka.

2) Why ...register is needed?
Ans:- This is to spread it.The ...register("email") syntax injects all necessary props 
(name, onChange, onBlur, ref, etc.) into the <input> so React Hook Form can track and validate 
it automatically.

so, register("email", { ...options }) => syntax
  email => should be unique so it can be identifiable
  {...options} => This object is to add options,now can be many option.



*/