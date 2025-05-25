import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <div className="contact-label">Nosso contato</div>
        <h1 className="contact-title">Encontre seu imóvel com o apoio certo.</h1>
        <p className="contact-desc">
          Procurar um novo lar vai além de escolher um endereço, é sobre fazer parte
          de um futuro mais equilibrado. Aqui, você encontra imóveis pensados para o
          conforto, a funcionalidade e o respeito ao meio ambiente, reunindo opções
          que valorizam a sustentabilidade, seja pela localização estratégica,
          eficiência energética ou uso inteligente de recursos.
        </p>
        <div className="contact-buttons">
          <button className="contact-button">Quero comprar um imóvel</button>
          <button className="contact-button">Quero alugar um imóvel</button>
          <button className="contact-button">Quero falar com um corretor</button>
        </div>
      </div>
      <div className="contact-image">
        {/* Placeholder for the image */}
        <div className="contact-arch" />
      </div>
    </section>
  );
};

export default ContactSection; 