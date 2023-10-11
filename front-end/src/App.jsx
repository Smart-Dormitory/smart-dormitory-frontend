import { useState } from 'react'
import {Mobile, Pc} from "./responsive/Responsive.jsx";
import Header from "./components/Header.jsx";
import "./index.css"

function App() {

  return (
    <>
      <Mobile>
        <Header/>
      </Mobile>
      <Pc><h2 className="text-2xl font-bold">PC는 아직 작업중입니다.</h2></Pc>
    </>
  )
}

export default App
