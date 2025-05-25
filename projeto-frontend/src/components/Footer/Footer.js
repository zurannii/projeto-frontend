import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <h2 className="footer-title">Compre ou alugue já o seu imóvel</h2>
        <p className="footer-desc">
          Conosco você garante a sua habitação de maneira sustentável e
          acessível sem complicações. O que você está esperando?
        </p>
        <button className="footer-button">CLIQUE AQUI!</button>
      </div>
      <hr className="footer-separator" />
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Contato</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Sobre Nós</a>
        </div>
        <div className="footer-circles">
          <div className="footer-circle"></div>
          <div className="footer-circle"></div>
          <div className="footer-circle"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 