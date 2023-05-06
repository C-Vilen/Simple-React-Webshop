import { Fragment } from "react";

// CSS import
import '../../styles/styles.css';

// Components
import Footer from "../../components/StandardComponents/Footer";
import AboutPageSection from "../../components/AboutPageSection";

export default function AboutDuck() {
	return (
		<Fragment>
			<main className="content">
				<AboutPageSection />
				<Footer />
			</main>
		</Fragment>
	);
}
