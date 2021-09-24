import React from 'react';
import logo from '../assets/logo.svg';
import './Home.css';
function Home() {
    return (
        <div className= "home">
            <div className="home_header py-5 px-2">
                <nav className="home_navbar items-center justify-center ">
                    <img src={logo} alt="Skeps Logo"/>
                    <ul className="sm:space-x-2 md:space-x-7 px-10">
                        <li >Merchant</li>
                        <li >Lender</li>
                        <li >About Us</li>
                        <li >Careers</li>
                    </ul>
                </nav>
                <button className="home_requestDemoButton items-center justify-center">
                    Request Demo
                </button>
            </div>
            <div >
                <div className="heading">
                    The Next Generation of POS financing
                </div>
            </div>
        </div>
    )
}

export default Home
