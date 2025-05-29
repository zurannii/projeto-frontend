import Header from '@/components/Header/Header'
import ResidenceCard from '@/components/ResidenceCard/ResidenceCard';
import './consultoresPage.css'; 

export default function consultoresPage (){
    return(
        <>
            <Header/>
            <main>
                <section className='section_one'>
                    <h1>Converse com um especialista</h1>
                    <p>Nosso time está aqui para entender sua necessidade e te apresentar as melhores opções.</p>
                </section>

                <section className='section_two'>
                    <h1>Setor de Vendas</h1>    
                    <ResidenceCard/>
                    <h1>Setor Financeiro</h1> 
                    <ResidenceCard/> 
                </section>
            </main>
        </>
    );
}
