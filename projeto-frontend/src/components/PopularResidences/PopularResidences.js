import React from 'react';
import './PopularResidences.css';
import ResidenceCard from '../ResidenceCard/ResidenceCard'; 

const PopularResidences = () => {
  const residences = [
    {
      id: 1,
      image: '/assets/casa-card.png', 
      price: '$36.000',
      title: 'Casa no Paiva - Pernambuco',
      description: 'Possui primeiro andar, vários ambientes, piscina...',
    },
    {
      id: 2,
      image: '/assets/casa-card-1.png', 
      price: '$15.000',
      title: 'Casa em Porto Alegre - Rio Grande do Sul',
      description: 'Possui primeiro andar, suítes em todos os quartos, estacionamento...',
    },
    {
      id: 3,
      image: '/assets/casa-card-2.png', 
      price: '$25.000',
      title: 'Apartamento em Barra da Tijuca - Rio de Janeiro',
      description: 'Possui condomínio, parque, área de lazer, academia...',
    },
  ];

  return (
    <section className="popular-residences-section">
      <div className="popular-residences-container">
        {/* Section Title */}
        <div className="popular-residences-header">
          <span className="subtitle">Melhores Escolhas</span>
          <h2 className="title">Residências Populares</h2>
        </div>

        {/* Residences Cards Container */}
        <div className="residences-cards-container">
          {residences.map((residence) => (
            <ResidenceCard 
              key={residence.id}
              image={residence.image}
              price={residence.price}
              title={residence.title}
              description={residence.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularResidences; 