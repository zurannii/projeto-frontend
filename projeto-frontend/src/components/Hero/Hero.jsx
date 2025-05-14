import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter hero-container">
                 {/* lado esquerdo*/}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <h1>Descubra <br/>
                        O Imóvel mais <br/> Adequado
                        </h1>
                    </div>
                    <div className=" flexColStart hero-des">
                        <span>Encontre uma variedade de imóveis que conbinam com você</span>
                        <span>Esqueça todas as dificuldades de encontrar um imóvel para você</span>
                    </div>
                    <div className="search-bar">
                        barra de pesquisa
                    </div>
                </div>
                {/* lado direito*/}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./vercel.svg" alt="hero" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero;