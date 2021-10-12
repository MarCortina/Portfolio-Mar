import React from "react"
import Styles from "./Layout.module.css"
import  Navbar  from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Layout = ({children}) => {
    return (
        <div className={Styles.containerLayout}>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
