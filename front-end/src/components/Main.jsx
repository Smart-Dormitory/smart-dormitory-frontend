import React from "react";
import {FiUser} from "react-icons/fi";

export default function Main() {
  return (
    <>
    
      <div className="flex mt-3">
        <div className="ml-3">
          <p className="mt-10">자연 속의 쾌적한 공간</p>
          <h3 className="text-2xl my-2">국립 한밭대학교</h3>
          <h4 className="text-2xl text-blue-300">학생 생활관</h4>
        </div>
        
        <div className="w-44 h-18 bg-blue-300 mt-12 ml-10 rounded-2xl flex items-center">
          <FiUser className="text-5xl text-white ml-3" />
          <div className="ml-1">
            <p className="text-white text-xs leading-5">20171999 권익현 님</p>
            <p className="text-white text-sm">미래동 205 A</p>
          </div>
        </div>
        
        
      </div>
      
      
      
      
    </>
  );
}
