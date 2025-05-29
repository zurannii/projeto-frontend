'use client'

import React from 'react' 
import './Header.css'
import Link from 'next/link';
import { LiaUserCircle } from "react-icons/lia";
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src="./vercel.svg" alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                    <Link href="/imoveis" className={pathname === "/imoveis" ? "active" : ""}>Imóveis</Link>
                    <Link href="/nosso-valor" className={pathname === "/nosso-valor" ? "active" : ""}>Nosso Valor</Link>
                    <Link href="/consultores" className={pathname === "/consultores" ? "active" : ""}>Consultores</Link> 

                    <div className="h-user-icon">
                      <LiaUserCircle size={40} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
