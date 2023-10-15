import { useState } from 'react'
import {Mobile, Pc} from "./responsive/Responsive.jsx";
import Header from "./components/Header.jsx";
import "./index.css"
import Main from "./components/Main.jsx";
import Notice from "./components/Notice.jsx";

function App() {

  return (
    <>
      <Mobile>
        <Header/>
        <Main/>
        <Notice/>
      </Mobile>
      <Pc><h2 className="text-2xl font-bold">PC는 아직 작업중입니다.</h2></Pc>
    </>
  )
}

export default App
