'use client'

import React, { useState, useEffect } from 'react' 
import './Header.css'
import Link from 'next/link';
import { LiaUserCircle } from "react-icons/lia";
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    // TODO: Implement actual user login status check (e.g., from context or state management)
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder state

    // Example effect to simulate login status change (remove when implementing actual auth)
    // useEffect(() => {
    //   // In a real app, this would check auth status from storage or context
    //   const userIsLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    //   setIsLoggedIn(userIsLoggedIn);
    // }, []);

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src="./vercel.svg" alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                    <Link href="/imoveis" className={pathname === "/imoveis" ? "active" : ""}>Imóveis</Link>
                    <Link href="/nosso-valor" className={pathname === "/nosso-valor" ? "active" : ""}>Nosso Valor</Link>
                    <a href="">Consultores</a>

                    {/* Conditionally render Login link or User Icon */}
                    {isLoggedIn ? (
                        <Link href="/profile">{/* Link to user profile or dashboard */}
                            <div className="h-user-icon">
                                <LiaUserCircle size={40} />
                            </div>
                        </Link>
                    ) : (
                        <Link href="/login">{/* Link to login page */}
                            <span className="login-link">Login</span>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Header;
