import React from 'react';
import './OurValue.css';

const valores = [
  {
    title: 'Aliva Priva Jardim',
    desc: 'Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.'
  },
  { title: 'Aliva Priva Jardim', desc: '' },
  { title: 'Aliva Priva Jardim', desc: '' },
];

function ValorCard({ title, desc }) {
  return (
    <div className="valor-card">
      <div className="valor-card-title">{title}</div>
      {desc && <div className="valor-card-desc">{desc}</div>}
    </div>
  );
}

export default function OurValue() {
  return (
    <section className="valor-section">
      <div className="valor-info">
        <div className="valor-label">Nosso Valor</div>
        <h1 className="primaryText valor-title">O que nos torna únicos?</h1>
        <p className="valor-desc">
          Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.
        </p>
        <div className="valor-cards">
          {valores.map((v, idx) => <ValorCard key={idx} {...v} />)}
        </div>
      </div>
      <div className="valor-arch-img">
        <div className="valor-arch" />
      </div>
    </section>
  );
}