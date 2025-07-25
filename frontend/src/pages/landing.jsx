import React, { useState } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Quick Meet</h2>
                </div>
                <button className="mobileMenuButton" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
                <div className={`navlist ${mobileMenuOpen ? 'open' : ''}`}>
                    <p onClick={() => {
                        router("/aljk23")
                        setMobileMenuOpen(false)
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")
                        setMobileMenuOpen(false)
                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")
                        setMobileMenuOpen(false)
                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by Quick Meet Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}
