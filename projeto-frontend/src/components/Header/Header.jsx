'use client'

import React from 'react' 
import './Header.css'
import Link from 'next/link';
import { HiOutlineUser } from "react-icons/hi";
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
                    <a href="">Consultores</a>

                    <div className="h-user-icon">
                      <HiOutlineUser size={24} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
