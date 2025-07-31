import React, { useState } from "react";
import Google from "../../public/img/logo-google-pay.svg";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";

function Payment() {
  return (
    <>
      <Navbar />
      <section className="p-28 bg-[#A0A3BD33] containerPopup relative">
        <div className="bg-[rgba(160, 163, 189, 0.2)]  flex flex-col gap-8">
          <div className="Money-transfer hidden flex flex-row items-center justify-center gap-5">
            <div className=" flex flex-col items-center gap-3">
              <div className="bg-green-600 w-[50px] h-[50px] flex items-center justify-center rounded-[50%]">
                ✓
              </div>
              <div>Dates And Time</div>
            </div>
            <div className=" border-t border-dashed border-blue-700 w-[85px]"></div>
            <div className=" flex flex-col items-center gap-3">
              <div className="bg-green-600 w-[50px] h-[50px] flex items-center justify-center rounded-[50%]">
                ✓
              </div>
              <div>Dates And Time</div>
            </div>
            <div className=" border-t border-dashed border-blue-700 w-[85px]"></div>
            <div className=" flex flex-col items-center gap-3">
              <div className="bg-green-600 w-[50px] h-[50px] flex items-center justify-center rounded-[50%]">
                ✓
              </div>
              <div>Dates And Time</div>
            </div>
          </div>
          <div className="payment-info bg-white px-9 py-12 flex flex-col gap-8">
            <h3>Payment Info</h3>
            <div>
              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-col gap-[14px]">
                  {/* dari date */}
                  <div className="flex flex-col gap-[9px]">
                    <div className="text-[14px] font-normal text-[#8692a6]">
                      DATE & TIME
                    </div>
                    <div className="text-[16px] font-normal text-[#000000]">
                      Tuesday, 07 July 2020 at 02:00pm
                    </div>
                  </div>
                  <div className="border-[1px] border-solid border-[#a0a3bd]"></div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="text-[14px] font-normal text-[#8692a6]">
                      MOVIE TITLE
                    </div>
                    <div className="text-[16px] font-normal text-[#000000]">
                      Spider-Man: Homecoming
                    </div>
                  </div>
                  <div className="border-[1px] border-solid border-[#a0a3bd]"></div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="text-[14px] font-normal text-[#8692a6]">
                      CINEMA NAME
                    </div>
                    <div className="text-[16px] font-normal text-[#000000]">
                      CineOne21
                    </div>
                  </div>
                  <div className="border-[1px] border-solid border-[#a0a3bd]"></div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="text-[14px] font-normal text-[#8692a6]">
                      NUMBER OF TICKETS
                    </div>
                    <div className="text-[16px] font-normal text-[#000000]">
                      3 pieces
                    </div>
                  </div>
                  <div className="border-[1px] border-solid border-[#a0a3bd]"></div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="text-[14px] font-normal text-[#8692a6]">
                      TOTAL PAYMENT
                    </div>
                    <div className="text-[16px] font-normal text-[#1d4ed8]">
                      $30,00
                    </div>
                  </div>
                  <div className="border-[1px] border-solid border-[#a0a3bd]"></div>
                </div>
              </div>
            </div>
            <form action="">
              <h3>Personal Information </h3>
              <div className="display-Form flex flex-col gap-3.5">
                <div className="flex flex-col gap-3.5">
                  <label htmlFor="fname" className="text-[#696f79] font-bold">
                    First Name
                  </label>
                  <input
                    className="outline-none focus:border-[#008000] transition-all duration-200 ease-in border-[1px] border-solid border-[#a0a3bd] w-[100%] h-[64px] py-[21px] px-[42px] rounded-[3px]"
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Input your fullname"
                  />
                </div>
                <div className="flex flex-col gap-3.5">
                  <label htmlFor="email" className="text-[#696f79] font-bold">
                    Email
                  </label>
                  <input
                    className="outline-none focus:border-[#008000] transition-all duration-200 ease-in border-[1px] border-solid border-[#a0a3bd] w-[100%] h-[64px] py-[21px] px-[42px] rounded-[3px]"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Input your Email"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-3.5">
                  <label htmlFor="pnum" className="text-[#696f79] font-bold">
                    Phone Number
                  </label>
                  <input
                    className="outline-none focus:border-[#008000] transition-all duration-200 ease-in border-[1px] border-solid border-[#a0a3bd] w-[100%] h-[64px] py-[21px] px-[42px] rounded-[3px]"
                    type="text"
                    id="pnum"
                    name="pnum"
                    placeholder="Input your Phone Number"
                  />
                </div>
              </div>
              <div className="payment-method *:flex flex-col gap-3.5">
                {" "}
                <div className="flex flex-wrap gap-[10px] justify-center">
                  d
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="google-pay"
                      name="payment-method"
                      className="hidden"
                    />
                    <label
                      htmlFor="google-pay"
                      className="inline-block p-[10px] rounded-[8px] cursor-pointer transition-all max-w-[146px] w-[100%] border-[1px] border-solid border-[#a0a3bd]"
                    >
                      <img src={Google} alt="" />
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="popup"></div>
      </section>
      <Footer />
    </>
  );
}

export default Payment;
