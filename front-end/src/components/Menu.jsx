import React from "react";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";

export default function Menu() {
  const arrowStyle = {
    fontSize:"24px",
    color: "#7b9acc",
  };
  return (
    <div className="flex justify-center">
      <div className="w-11/12 h-32 border-2 border-black rounded-lg mt-10 flex flex-col">
        <header className="w-full h-10 rounded-t border-white bg-blue-300 flex items-center justify-around ">
          <span className="text-white ">오늘의 식단</span>
          <span className="absolute right-8 text-white text-lg">+</span>
        </header>
        <div className="flex justify-between items-center">
          <button className=""><SlArrowLeft style={arrowStyle}/></button>
          <figure className="text-center">
            <p>09.05 점심</p>
            <span>쌀밥, 남부식콩나물국밥, 눈꽃토마토소스미트볼,구운어묶볶음,부추무침,깍두기</span>
          </figure>
          <button className=""><SlArrowRight style={arrowStyle}/></button>
        </div>
      </div>
    </div>
  );
}
