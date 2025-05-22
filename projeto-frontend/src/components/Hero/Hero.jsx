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
      <div className="hero-container">
        {/* Texto à esquerda */}
        <div className="hero-text">
          <h1 className="hero-title">
            Moradias sustentáveis e <br />
            acessíveis que mudam <br />
            vidas.
          </h1>
          <p className="hero-desc">
            Possuímos uma proposta de imobiliária focada em habitação sustentável e acessível que busca atender a demanda crescente por imóveis que não só respeitem o meio ambiente, mas também sejam viáveis para diferentes camadas sociais.
          </p>
          {/* Campo de busca */}
          <div className="hero-search">
            {/* Icone de Localização - Adicionar manualmente ou com biblioteca de icones */}
            <div className="location-box">
              <FaMapMarkerAlt size={32} color="#769080" />
            </div>

            <input
              type="text"
              placeholder="Digite a localização"
            />
            <div>
            <button className="search-button">Busque Aqui</button>
            </div>

          </div>
          {/* Estatísticas */}
          <div className="hero-stats">
            {heroStats.map((stat, index) => (
              <div className="hero-stat" key={index}>
                <span className="hero-stat-number">
                   <AnimatedNumber finalNumber={stat.number} /> {/* Use AnimatedNumber component */}
                </span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Imagem à direita - Removida e usada como background */} 
        {/* <div className="hero-image"></div> */} 
      </div>
    </section>
  );
};

export default Hero;
