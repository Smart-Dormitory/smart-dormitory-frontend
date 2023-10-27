import React from 'react';
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Notice from "../components/Notice.jsx";
import Menu from "../components/Menu.jsx";

export default function Home() {
    return (
        <div>
            <Header/>
            <Main/>
            <Notice/>
            <Menu/>
        </div>
    )
}
