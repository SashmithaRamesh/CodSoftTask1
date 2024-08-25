import React from "react";
import { Helmet } from "react-helmet";
import { Button, Radio, Input, Img, Heading } from "../../components";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>CodSoft_Task_1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center bg-gradient px-14 py-[85px] md:p-5">
        <Heading size="s" as="h1" className="text-center">
          SIGN UP{" "}
        </Heading>
        <Heading as="h2" className="mt-[33px] text-center !text-pink-A100">
          Please sign up to continue using our app
        </Heading>
        <div className="mb-[5px] mt-[60px] flex w-[52%] flex-col items-center md:w-full">
          <Input shape="round" type="text" name="userName" placeholder={`user name`} className="sm:px-5" />
          <Input shape="round" name="email" placeholder={`e mail`} className="mt-[41px] sm:px-5" />
          <Input
            shape="round"
            type="password"
            name="password"
            placeholder={`password`}
            suffix={<Img src="images/img_hide.png" alt="Hide" className="h-[24px] w-[24px]" />}
            className="mt-11 gap-[35px] sm:px-5"
          />
          <Input
            shape="round"
            type="password"
            name="confirmpassword"
            placeholder={`confirm password`}
            suffix={<Img src="images/img_hide.png" alt="Hide" className="h-[24px] w-[24px]" />}
            className="mt-[43px] gap-[35px] sm:px-5"
          />
          <Radio
            value="iagreewithprivacypolicy"
            name="iagreewith"
            label="       I agree with privacy policy"
            className="ml-8 mt-[71px] gap-[33px] self-start text-center text-[25px] font-bold text-pink-300_01 md:ml-0"
          />
          <Button size="xs" shape="round" className="mt-[63px] min-w-[200px] font-bold text-white-A700 sm:px-5">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
}
