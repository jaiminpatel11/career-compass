import React from "react";
import InputGroup from "../components/InputGroup";
import FormButton from "../components/FormButton";

export function ForgotPasswordContainer() {
  return (
    <div className="flex flex-col min-h-screen text-xl font-bold bg-indigo-500 text-stone-500">
      <div className="flex w-full h-1/4">
        <img
          loading="lazy"
          src="./assets/img/career_compass_logo.png"
          alt="career compass logo"
          className="max-w-full aspect-[2.13] w-[420px]"
        />
        {/* <img
          loading="lazy"
          src={`${process.env.PUBLIC_URL}/assets/img/secure_files.png`}
          className="flex-1 object-contain"
          alt="secure files"
        /> */}
      </div>

      <section className="flex justify-center items-center px-16 py-16 w-full bg-white rounded-[40px_40px_80px_0px] flex-grow max-md:px-5 max-md:max-w-full">
        <form className="flex flex-col max-w-full w-full max-w-[420px]">
          <h1 className="text-4xl text-black">Forgot</h1>
          <h2 className="my-3 text-4xl text-black">Your Password?</h2>
          <InputGroup type="email" label="Email" name="email" id="email" />
          <InputGroup
            id="newPassword"
            label="New Password"
            type="password"
            name="password"
          />
          <InputGroup
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
          />
          <FormButton
            type="submit"
            className="justify-center items-center px-4 py-3.5 mt-14 text-2xl text-white bg-indigo-500 rounded-md max-md:px-5 max-md:mt-10"
          >
            Reset Password
          </FormButton>
        </form>
      </section>
    </div>
  );
}
