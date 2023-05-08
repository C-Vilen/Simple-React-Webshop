import { Fragment } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import LoginForm from "../../components/LoginComponent/LoginForm";
import Footer from "../../components/StandardComponents/Footer";

export default function Login() {
    return (
        <Fragment>
            <main className="content">
                <LoginForm />
                <Footer />
            </main>
        </Fragment>
    );
}
