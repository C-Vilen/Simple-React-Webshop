// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import Header from '../../components/Header';
import CardCarrousel from '../../components/CardCarrousel';

export default function Home() {
    return (
        <>
            <Header />
            <CatCardContainer 
            catName = "" />
            <CardCarrousel items={[""]} ProdCardWidth={0} ProdCardHeight={0} gap={0} />
            <AboutSection />
            <Footer />
        </>
    )
}