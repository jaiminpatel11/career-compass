import React from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "../components/InputGroup";
import FormButton from "../components/FormButton";

export function LoginContainer() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/register");
  };

  return (
    <div className="bg-indigo-500">
      <div className="flex gap-5 max-md:gap-0">
        <section className="flex flex-col p-0 w-[67%]">
          <form className="flex flex-col grow pr-6 w-full text-xl font-bold bg-white rounded-[0px_40px_40px_0px] text-stone-500 max-md:px-5 max-md:max-w-full max-sm:pr-6 max-sm:pl-3 max-sm:-mr-px">
            <h2 className="self-center mt-12 text-4xl text-black max-md:mt-10">
              Sign In
            </h2>
            <div className="flex flex-col self-end mt-5 max-w-full w-[654px] max-md:w-full">
              <InputGroup type="email" label="Email" name="email" id="email" />
            </div>
            <div className="flex flex-col self-end mt-5 max-w-full w-[654px] max-md:w-full">
              <InputGroup
                type="password"
                label="Password"
                name="password"
                id="password"
              />
            </div>
            <div className="flex justify-center mt-1">
              <a href="/forgot_password" className="text-indigo-500 text-sm">
                Forgot Password?
              </a>
            </div>
            <div className="flex flex-col items-center">
              <FormButton
                type="submit"
                className="justify-center items-center px-4 py-2 my-4 text-2xl text-white bg-indigo-500 rounded-md w-auto"
              >
                Sign in
              </FormButton>
              <p className="self-center text-center mt-2">Or</p>
              <FormButton
                type="button"
                onClick={handleCreateAccountClick}
                className="justify-center items-center px-4 py-2 my-4 text-2xl text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid w-auto"
              >
                Create Account
              </FormButton>
            </div>
          </form>
        </section>
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <figure className="flex z-10 flex-col mt-7 max-md:max-w-full">
            <img
              loading="lazy"
              src="./assets/img/career_compass_logo.png"
              alt="career compass logo"
              className="max-w-full aspect-[2.13] w-[420px]"
            />
          </figure>
          <img
            loading="lazy"
            src="./assets/img/chart_girl.png"
            alt="home page icon"
            className="self-end mt-5 max-w-full aspect-[0.93] w-[514px]"
          />
        </div>
      </div>
    </div>
  );
}
