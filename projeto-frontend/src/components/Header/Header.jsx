import React from 'react' 
import './Header.css'

const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>

                <img src="./vercel.svg" alt="logo" width={100} />

                <div className="h-menu">
                    <a href="#">
                        Home
                    </a>

                    <a href="">
                        Imóveis
                    </a>

                    <a href="">
                        Nosso Valor
                    </a>

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