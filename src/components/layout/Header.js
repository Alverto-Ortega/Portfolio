import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <div className="bg-black">
        <header className="flex justify-center px-2 w-full max-w-7xl mx-auto py-3">
            <div className="flex justify-center">
                <Link to="/" >
                    <div className="hover:bg-violet-500 rounded-lg p-2">
                        <p className="text-white">Home</p>
                    </div>
                </Link>
                <Link to="/about" >
                    <div className="hover:bg-violet-500 rounded-lg p-2">
                        <p className="text-white">About Me</p>
                    </div>
                </Link>
            </div>
        </header>
    </div>
)

export default Header