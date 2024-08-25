import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Heading, Button, Img } from "../../components";

export default function WelcomePage() {
  return (
    <>
      <Helmet>
        <title>CodSoft_Task_1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[58px] md:p-5">
        <div className="mx-auto mt-[31px] flex w-full max-w-[1262px] flex-col items-center">
          <Heading size="s" as="h1" className="text-center !text-pink-300">
            WELCOME
          </Heading>
          <Img src="images/img_image_1.png" alt="imageone_one" className="mt-2 h-[386px] w-[386px] object-cover" />
          <Heading as="h2" className="mt-[30px] text-center">
            Don’t have an account
          </Heading>
          <div className="mt-[49px] flex items-center gap-4">
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
          <div className="mt-[47px] flex items-center gap-[21px] self-stretch md:flex-col">
            <div className="h-[3px] flex-1 bg-pink-300_01 md:self-stretch" />
            <Heading as="h2" className="text-center">
              (or)
            </Heading>
            <div className="h-[3px] flex-1 bg-pink-300_01 md:self-stretch" />
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          <Link to="/signup" >
          <Button size="xs" shape="round" className="mt-[25px] min-w-[200px] font-bold text-white-A700 sm:px-5">
          Sign up
          </Button>
          </Link>  
          </a>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <div className="mt-[38px] flex flex-wrap gap-[15px]">
              <a href="#">
                <Heading as="h2" className="text-center">
                  Already have an account?
                </Heading>
              </a>
              <a href="Login" target="_blank" rel="noreferrer" className="self-start">
              <Link to="/login">
              <Heading as="h3" className="text-center !font-extrabold !text-gray-100">
              Login
              </Heading>
              </Link>  
              </a>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
