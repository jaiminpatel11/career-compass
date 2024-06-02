import React from "react";
import { Helmet } from "react-helmet";
import Heading from "../components/Heading";
import Button from "../components/Button";
import Input from "../components/Input";
import Img from "../components/Img";

export function LoginContainer() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-fill bg-indigo-A200">
        <div className="relative h-[1024px] bg-indigo-400 pr-[31px] sm:pr-5">
          <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[68%] flex-col items-start gap-[82px] rounded-br[40px] rounded-br[40px]">
            <a href="#" className="self-center">
              <Heading as="h1">Sign in</Heading>
            </a>
            <div className="mb-[131px] ml-[7px] flex w-[54%] flex-col items-center md:ml-0 md:w-full">
              <div className="flex flex-col items-start self-strech">
                <Button
                  shape="square"
                  className="relative z-[1] ml-3.5 min-w-[79px] font-bold md:ml-0"
                >
                  Email
                </Button>
                <div className="relative mt-[-22px] h-[29px] self-stretch rounded-lg border border-solid border-grey-700" />
              </div>
              <div className="mt-[99px] flex flex-col items-start self-strech">
                <Button
                  size="lg"
                  shape="square"
                  className="relative z-[2] ml-3.5 min-w-[122px] font-bold md:ml-0"
                >
                  Password
                </Button>
                <Input shape="round" name="createfrom" className="mt-[-46px]" />
              </div>
              <Heading
                size="xs"
                as="h2"
                className="mt-[21px] self-end !text-grey-700"
              >
                Forgot your password?
              </Heading>
              <Button
                color="indigo_400"
                size="md"
                shape="round"
                className="mt-[57px] w-full font-inter font-bold sm:px-5"
              >
                Sign in
              </Button>
              <Heading
                size="xs"
                as="h3"
                className="mt-[37px] h-[25px] w-[26px] !text-grey-700"
              >
                Or
              </Heading>
              <Button
                size="md"
                shape="round"
                className="mt-[37px] w-full border border-solid border-indigo-400 font-inter font-bold !text-indigo-400 sm:px-5"
              >
                Create Account
              </Button>
            </div>
          </div>
          <Img
            src="./assets/img/chart_girl.png"
            alt="home image"
            className="absolute right-[10%] top-[10%] m-auto h-[531px] w-[47%]"
          />
          <Img
            src="./assets/img/career_compass_logo.png"
            alt="Career compass"
            className="absolute right-[2%] top-[5%] m-auto h-[167px] w-[30%] object-cover"
          />
        </div>
      </div>
    </>
  );
}
