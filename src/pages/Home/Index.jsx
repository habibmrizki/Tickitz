import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Img1 from "../../../public/img/Rectangle 35.svg";
import Img3 from "../../../public/img/Rectangle 37.svg";
import Img2 from "../../../public/img/Rectangle 36.svg";
import Img4 from "../../../public/img/Rectangle 38.svg";

import Shield from "../../../public/img/Shield Done.svg";
import checklist from "../../../public/img/Vector-checklist.svg";
import message from "../../../public/img/Vector-message.svg";
import MoviePopular from "../../components/MoviePopular";

const Index = () => {
  return (
    <>
      <Navbar />
      <section className="px-8 py-12 lg:px-32 lg:py-24 flex flex-col lg:flex-row justify-between gap-8 bg-white">
        <div className="flex flex-col gap-4 lg:max-w-[638px] text-center lg:text-left">
          <div className="text-[#1d4ed8] font-bold text-lg">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </div>
          <div className="text-[#121212] font-medium text-4xl lg:text-5xl leading-[70px]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </div>
          <div className="text-[#A0A3BD] font-normal text-base">
            Sign up and get the ticket with a lot of discount
          </div>
        </div>
        <div className="grid gap-[13px] grid-cols-2">
          <div className="flex flex-col gap-[16px]">
            <img src={Img1} alt="" />
            <img src={Img3} alt="" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <img src={Img2} alt="" />
            <img src={Img4} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="px-8 py-12 lg:px-32 lg:py-24 flex flex-col gap-8">
          <div className="text-[#1d4ed8] font-bold text-lg text-center">
            WHY CHOOSE US
          </div>
          <div className="text-[#121212] font-normal text-3xl lg:text-4xl text-center">
            Unleashing the Ultimate Movie Experience
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="bg-[rgba(29,78,216,0.2)] w-14 h-14 rounded-full flex items-center justify-center">
                <img src={Shield} alt="Shield Done" />
              </div>
              <div className="text-[#121212] font-bold text[18px]">
                Guaranteed
              </div>
              <div className="text-[#A0A3BD] font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="bg-[rgba(29,78,216,0.2)] w-14 h-14 rounded-full flex items-center justify-center">
                <img src={checklist} alt="Checklist" />
              </div>
              <div className="text-[#121212] font-bold text[18px]">
                Affordable
              </div>
              <div className="text-[#A0A3BD] font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="bg-[rgba(29,78,216,0.2)] w-14 h-14 rounded-full flex items-center justify-center">
                <img src={message} alt="Message" />
              </div>
              <div className="text-[#121212] font-bold text[18px]">
                24/7 Customer Support
              </div>
              <div className="text-[#A0A3BD] font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </div>
            </div>
          </div>
        </div>
      </section>
      <MoviePopular />
      <MoviePopular />
      <section>
        <form className="py-[16px] px-9 md:px-[70px]">
          <div
            className="subscribe h-[318px]  w-full rounded-lg  bg-[#2948ff]  text-white   flex flex-col justify-center items-center gap-8 relative overflow-hidden   
        after:content-['']
        after:absolute
        after:top-0 after:left-0
        after:w-full after:h-full
        after:bg-black
        after:opacity-0
        after:transition-opacity
        after:duration-300"
          >
            <div className="subscribe-text text-[19px] text-center">
              Subscribe to our newsletter
            </div>
            <div className="subscribe-inputs flex gap-[11px] flex-col md:flex-row after:absolute after:w-[200px] after:h-[200px] after:content-[''] after:border-[5px] after:border-white after:border-solid after:rounded-[50%] after:bottom-[-100px] after:right-[-100px]">
              <input
                type="text"
                placeholder="First Name"
                className="  bg-white text-[#4f5665] p-[10px] w-full rounded-[5px] border border-gray-200 border-solid"
              />
              <input
                type="text"
                placeholder="Email address"
                className=" bg-white text-[#4f5665] p-[10px] w-full rounded-[5px] border border-gray-200 border-solid"
              />
              <button
                type="button"
                className="bg-white text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-800 hover:text-white hover:border hover:border-white transition duration-200"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Index;
