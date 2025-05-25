'use client';
import dynamic from 'next/dynamic';
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

// Dynamically import the PopularResidences component
const PopularResidences = dynamic(
  () => import('@/components/PopularResidences/PopularResidences'), // Importa o componente da seção
  { ssr: false }
);

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {/* Renderiza o componente PopularResidences abaixo do Hero */} 
      <PopularResidences/>
    </div>
  );
}

export default App;