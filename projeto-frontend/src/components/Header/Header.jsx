import React from 'react' 
import './Header.css'
import Link from 'next/link';

const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>

                <img src="./vercel.svg" alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    <Link href="/">Home</Link>

                    <Link href="/imoveis">Imóveis</Link>

                    <Link href="/nosso-valor">Nosso Valor</Link>

                    <a href="">
                        Consultores
                    </a>
                    <button className='button'>
                    <a href="">
                        Entre em Contato
                    </a>
                    </button>
                    
                </div>

            </div>

        </section>
    )
}

export default Header