import React from "react";
import Tickitz from "../../public/img/Tickitz-footer.svg";
import Ebuid from "../../public/img/Ebu.id.svg";
import Cinema21 from "../../public/img/CineOne212.svg";
import Hiflix from "../../public/img/Hiflix2.svg";
import Facebook from "../../public/img/Logo-Facebook.svg";
import Instagram from "../../public/img/Logo-Instagram.svg";
import Twitter from "../../public/img/Logo-Twitter.svg";
import Youtube from "../../public/img/Logo-Youtube.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-col px-[24px] py-[64px] lg:px-[130px] lg:py-[100px]">
          <div className="flex flex-col gap-[40px] md:justify-between md:flex-start md:flex-row ">
            <div className="flex flex-col gap-[15px] ">
              <div className="flex flex-row gap-[10px]">
                <img src={Tickitz} alt="Logo Tickitz" />
              </div>
              <div className="flex flex-col gap-[15px] items-start text-[#6e7191]">
                <div>Stop waiting in line. Buy tickets</div>
                <div>conveniently, watch movies quietly.</div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="color-[#000000] text-[16px] font-[700]">
                Explore
              </div>
              <div className="flex flex-col gap-[15px] text-[#6e7191] ">
                <div>Cinemas</div>
                <div>Movies List</div>
                <div>My Ticket</div>
                <div>Notification</div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="color-[#000000] text-[16px] font-[700]">
                Our Sponsor
              </div>
              <div className="flex flex-col gap-[25px] ">
                <img src={Ebuid} alt="" className="w-[80px] h-[30px]" />
                <img src={Cinema21} alt="" className="w-[80px] h-[30px]" />
                <img src={Hiflix} alt="" className="w-[80px] h-[30px]" />
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="className=color-[#000000] text-[16px] font-[700]">
                Follow us
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-row gap-[15px]  text-[#6E7191]">
                  <img
                    src={Facebook}
                    alt="Logo Facebook"
                    className="w-[24px] h-[24px]"
                  />
                  <div>tickitz.id</div>
                </div>
                <div className="flex flex-row gap-[15px]  text-[#6E7191]">
                  <img
                    src={Instagram}
                    alt="Logo Instagram"
                    className="w-[24px] h-[24px]"
                  />
                  <div>tickitz.id</div>
                </div>
                <div className="flex flex-row gap-[15px]  text-[#6E7191]">
                  <img
                    src={Twitter}
                    alt="Logo Twitter"
                    className="w-[24px] h-[24px]"
                  />
                  <div>tickitz.id</div>
                </div>
                <div className="flex flex-row gap-[15px] text-[#6E7191]">
                  <img src={Youtube} alt="Logo Youtube" />
                  <div>tickitz.id</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
