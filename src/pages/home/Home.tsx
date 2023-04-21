// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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