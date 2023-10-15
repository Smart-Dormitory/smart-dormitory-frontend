export default function Notice() {
  return (
    <div className="flex justify-center">
      
      
      <div className="w-11/12 h-64 border-2 border-black rounded-lg mt-10 flex flex-col ">
        <header className="w-full h-14 rounded-t border-white bg-blue-300 flex items-center justify-around ">
          <span
            className="text-white ml-2 cursor-pointer after:content-[''] after:mt-1 after:border-2 after:border-white after:block    ">공지사항</span>
          <span className="w-5 h-0.5 bg-white rotate-90 mx-2"></span>
          <span className="text-white cursor-pointer flex-auto">FAQ</span>
          <span className="text-white mr-3 text-2xl">+</span>
        </header>
        
        
        <div className="m-6">
          
          <p className="flex justify-between"><span>2023년도 냉방가동 중지 안내</span> <span
            className="text-gray-400">09.21</span></p>
          
          <hr className="my-5"/>
          <p className="flex justify-between"><span>2023학년도 2학기 생활관비 2차 ...</span> <span
            className="text-gray-400">09.21</span></p>
          <p className="flex justify-between"><span>3차 BTL 생활관 8월 공공교금 정산 ...</span> <span
            className="text-gray-400">09.15</span></p>
          <p className="flex justify-between"><span>제 1BTL 관 목련화동 공사로 인한...</span> <span
            className="text-gray-400">09.05</span></p>
        
        
        </div>
      
      </div>
    </div>
  );
}
