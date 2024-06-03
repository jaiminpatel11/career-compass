import React from "react";
import InputGroup from "../components/InputGroup";
import FormButton from "../components/FormButton";

export function RegisterContainer() {
  return (
    <div className="pl-7 bg-indigo-500">
      <div className="flex gap-5 max-md:gap-0">
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
            src="./assets/img/home_page_icon.png"
            alt="home page icon"
            className="self-end mt-5 max-w-full aspect-[0.93] w-[514px]"
          />
        </div>
        <section className="flex flex-col ml-5 p-0 w-[67%]">
          <form className="flex flex-col grow pr-6 w-full text-xl font-bold bg-white rounded-[40px_0px_0px_40px] text-stone-500 max-md:px-5 max-md:max-w-full max-sm:pr-6 max-sm:pl-3 max-sm:-mr-px">
            <h2 className="self-center mt-12 text-4xl text-black max-md:mt-10">
              Create Account
            </h2>
            <div className="flex gap-5 self-end mt-5 max-w-full whitespace-nowrap w-[654px] max-md:flex-wrap max-md:mt-10">
              <InputGroup label="Name" name="name" id="name" />
              <InputGroup type="email" label="Email" name="email" id="email" />
            </div>
            <div className="flex gap-5 self-end mt-5 max-w-full w-[654px] max-md:flex-wrap max-md:mt-10">
              <InputGroup
                type="password"
                label="Password"
                name="password"
                id="password"
              />
              <InputGroup
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
              />
            </div>
            <div className="flex flex-col items-start self-center pt-2 mt-5 pr-20 pl-4 max-w-full text-lg whitespace-nowrap bg-white  max-md:pr-5">
              <label htmlFor="role" className="leading-[111%]">
                Select role
              </label>
              <select
                id="role"
                name="role"
                className="mt-2 p-2 bg-white border border-gray-400 rounded-md"
              >
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
              </select>
            </div>
            <div className="flex flex-col items-center">
              <FormButton
                type="submit"
                className="justify-center items-center px-4 py-2 my-4 text-2xl text-white bg-indigo-500 rounded-md w-auto"
              >
                Create Account
              </FormButton>
              <p className="self-center text-center mt-2">Or</p>
              <FormButton
                type="button"
                className="justify-center items-center px-4 py-2 my-4 text-2xl text-indigo-500 bg-white rounded-md border border-indigo-500 border-solid w-auto"
              >
                Sign in
              </FormButton>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
