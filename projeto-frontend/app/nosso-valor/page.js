import Header from '@/components/Header/Header';
import OurValue from '@/components/OurValue/OurValue';
import TeamCard from '@/components/TeamCard/TeamCard';

export default function ValorPage() {
  return (
    <div>
      <Header />
      <main className="innerWidth paddings valor-main">
        <OurValue />
        <TeamCard />
      </main>
    </div>
  );
}