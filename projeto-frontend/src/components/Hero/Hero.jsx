"use client";
import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Data structure for statistics
const heroStats = [
  { number: '9.000+', label: 'Clientes satisfeitos' },
  { number: '4.000+', label: 'Casas e apartamentos vendidos' },
  { number: '10+', label: 'Impactos ambientais reduzidos' },
];

// Component for animating the number
const AnimatedNumber = ({ finalNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const targetNumber = parseInt(finalNumber.replace(/\+|\.|,/g, '')); // Parse the number, removing non-digits
  const isDecimal = finalNumber.includes('.'); // Check if original number was decimal
  const isPlus = finalNumber.includes('+'); // Check if original number had a plus

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const start = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      let animatedValue = progress * targetNumber;

      if (isDecimal) {
        animatedValue = Math.floor(animatedValue * 10) / 10; // Keep one decimal place
      } else {
        animatedValue = Math.floor(animatedValue);
      }
      
      setCurrentNumber(animatedValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (isPlus) {
         setCurrentNumber(targetNumber + '+'); // Add '+' back at the end
      }
    };

    requestAnimationFrame(animate);
  }, [finalNumber, targetNumber, isDecimal, isPlus]); // Re-run effect if finalNumber changes

  // Format the displayed number (add commas and plus back) - Basic formatting
  const formattedNumber = typeof currentNumber === 'number' ? currentNumber.toLocaleString('pt-BR') : currentNumber;

  return <span>{formattedNumber}</span>;
};

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
