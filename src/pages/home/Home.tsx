// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <CatCardContainer />
            <AboutSection />
            <Footer />
        </>
    )
}