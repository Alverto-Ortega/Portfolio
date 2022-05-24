import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => (
    <div >
        <Header/>
            <main className="px-2 min-h-screen bg-blue-900">
                { children }
            </main>
        <Footer/>
    </div>
)
export default Layout
