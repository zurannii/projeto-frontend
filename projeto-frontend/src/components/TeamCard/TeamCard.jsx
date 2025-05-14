"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './TeamCard.css';

const equipe = [
  {
    nome: 'Beatriz Suelen',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
  {
    nome: 'Jansen Okasaki',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
  {
    nome: 'Luana Cabral',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
  {
    nome: 'Roberta Nascimento',
    area: 'área',
    desc: 'Lorem ipsum dolor sit amet. Et explicabo enim in galsium tempore',
    image: ''
  },
];

function TeamCard({ nome, area, desc, image }) {
  return (
    <div className="equipe-card">
      <div className="equipe-card-img" />
      <div className="equipe-card-body">
        <div className="equipe-card-area">{area}</div>
        <div className="equipe-card-nome">{nome}</div>
        <div className="equipe-card-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="equipe-section">
      <div className="equipe-label">Nossa Equipe</div>
      <h2 className="equipe-title">Nossos Desenvolvedores</h2>
      <p className="equipe-desc">
        Lorem ipsum dolor sit amet. Hic ducimus deserunt eum nulla consectetur eos delectus harum. Et nesciunt molestias eum maxime laboriosam et molestias illum sit nisi sint est perferendis sint ut possimus eligendi.
      </p>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {equipe.map((p, idx) => (
          <SwiperSlide key={idx}>
            <TeamCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}