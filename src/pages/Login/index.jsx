import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Input } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>CodSoft_Task_1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[81px] md:p-5">
        <div className="mb-[45px] flex w-[95%] flex-col items-center md:w-full">
          <a href="#">
            <Heading size="s" as="h1" className="text-center !font-extrabold">
              <span className="font-bold text-pink-300_01">LOGIN&nbsp;</span>
              <span className="font-bold text-pink-300_01">NOW</span>
            </Heading>
          </a>
          <Heading as="h2" className="mt-8 text-center !text-pink-A100">
            Please login to continue using our app
          </Heading>
          <div className="mt-[65px] flex w-[55%] flex-col items-center gap-[49px] md:w-full">
            <Input shape="round" name="email" placeholder={`e mail`} className="sm:px-5" />
            <Input
              shape="round"
              type="password"
              name="password"
              placeholder={`password`}
              suffix={<Img src="images/img_hide.png" alt="Hide" className="h-[24px] w-[24px]" />}
              className="gap-[35px] sm:px-5"
            />
            <a href="#" className="self-start">
              <Heading as="h2" className="text-center !text-pink-A100_01">
                Forgot Password?
              </Heading>
            </a>
            
            <Button size="xs" shape="round" className="min-w-[200px] font-bold text-white-A700 sm:px-5">
            Login
            </Button>
          </div>
          <div className="mt-[74px] flex items-center gap-[21px] self-stretch md:flex-col">
            <div className="h-[3px] flex-1 bg-pink-300_01 md:self-stretch" />
            <Heading as="h2" className="text-center">
              (or)
            </Heading>
            <div className="h-[3px] flex-1 bg-pink-300_01 md:self-stretch" />
          </div>
          <div className="mt-[70px] flex items-center gap-4">
            <Button shape="round" className="w-[59px]">
              <Img src="images/img_google.png" />
            </Button>
            <Button shape="round" className="w-[57px]">
              <Img src="images/img_linked_in.png" />
            </Button>
            <Button shape="round" className="w-[57px]">
              <Img src="images/img_instagram.png" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
