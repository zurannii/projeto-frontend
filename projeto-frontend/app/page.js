'use client';
import dynamic from 'next/dynamic';
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

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
      {/* Add the Contact Section below PopularResidences */}
      <ContactSection/>
      {/* Add the Footer below the Contact Section */}
      <Footer/>
    </div>
  );
}

export default App;