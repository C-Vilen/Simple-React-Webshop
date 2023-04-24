// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import Header from "../../Components/Header";
import CatCardContainer from '../../Components/CatCardContainer';
import AboutSection from '../../Components/AboutSection';
import Footer from '../../Components/Footer';
export default function Home() {
    return (
        <>
            <Header />
            <CatCardContainer />
            <AboutSection />
            <Footer />
        </>
    )
}