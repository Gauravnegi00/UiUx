import React from "react";
import iphone01 from "../assets/01.webp";
import iphone02 from "../assets/02.webp";
import iphone03 from "../assets/03.webp";
import iphone04 from "../assets/04.webp";
import iphone05 from "../assets/05.webp";
import iphone06 from "../assets/06.webp";
import iphone07 from "../assets/07.webp";
import iphone08 from "../assets/08.webp";
import iphone09 from "../assets/09.webp";
import iphone10 from "../assets/10.webp";
import iphone11 from "../assets/11.webp";
import iphone12 from "../assets/12.webp";
import Hand from "../assets/hand.webp";
import HandCompo from "./HandCompo";

function ShowCase2() {
  return (
    <div className="w-screen h-auto  flex flex-col gap-5 justify-start pb-4 items-center text-white relative bg-black ">
        
     
        {/* <img src={Hand} alt="" className="w-[1290px] h-[728px] sticky top-0 bg-[#dadada] " /> */}
        <div className="min-w-full min-h-full absolute top-[-23px] ">
            <HandCompo />
        </div>
      <div className="flex flex-col gap-5">
        <div className="flex w-screen gap-4 justify-center ">
          <img
            src={iphone01}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <img
            src={iphone02}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <div className="w-[290px] h-[570px]"></div>
          <img
            src={iphone03}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <img
            src={iphone04}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
        </div>

        <div className="flex w-screen gap-4 justify-center">
          <img
            src={iphone05}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <img
            src={iphone06}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <div className="w-[290px] h-[570px]"></div>
          <img
            src={iphone07}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <img
            src={iphone08}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
        </div>

        <div className="flex w-screen gap-4 justify-center">
          <img
            src={iphone09}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <img
            src={iphone10}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <div className="w-[290px] h-[570px]"></div>
          <img
            src={iphone11}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
          <img
            src={iphone12}
            alt=""
            className="w-[300px] h-[590px] rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ShowCase2;
