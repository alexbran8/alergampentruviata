import React from "react";

import {Footer} from "../components/Footer"
import {Header} from "../components/Header"
import {Navbar} from "../components/Navbar"
import { Background } from "../components/Background";


export const Layout = ({children}) => {

    return (
        <>
        <Background />
        <Header />
        <Navbar />
        {children}
        <Footer />
        </>
    )
}