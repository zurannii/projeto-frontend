"use client";
import React, { useState } from 'react';
import './OurValue.css'; 

const valores = [
  {
    title: 'Aliva Priva Jardim',
    desc: 'Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.'
  },
  {
    title: 'Aliva Priva Jardim', 
    desc: 'Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.'
  },
  {
    title: 'Aliva Priva Jardim', 
    desc: 'Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.'
  },
];

// Modified ValorCard to handle open state and display description
function ValorCard({ title, desc, isOpen, onClick }) {
  return (
    <button className={`valor-card ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="valor-card-title">{title}</div>
      {/* Description is conditionally rendered based on isOpen */} 
      {isOpen && desc && <div className="valor-card-description">{desc}</div>}
    </button>
  );
}

export default function ValorSection() {
  const [openCardIndex, setOpenCardIndex] = useState(null); // State to track open card index

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index); // Toggle open state
  };

  return (
    <section className="valor-section">
      <div className="valor-info">
        <div className="valor-label">Nosso Valor</div>
        <h1 className="primaryText valor-title">O que nos torna únicos?</h1>
        <p className="valor-desc">Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.</p>
        <div className="valor-cards">
          {valores.map((v, idx) => (
            <ValorCard 
              key={idx} 
              title={v.title} 
              desc={v.desc}
              isOpen={openCardIndex === idx}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>
      </div>
      <div className="valor-arch-img">
        <div className="valor-arch" />
      </div>
    </section>
  );
} 