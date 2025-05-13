import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter hero-container">
                 {/* lado esquerdo*/}
                <div className="hero-left">
                    <div className="hero-title">
                        <h1></h1>
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