import { Fragment } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import LoginForm from "../../components/LoginComponent/LoginForm";
import Footer from "../../components/Footer";

export default function Login() {
    return (
        <Fragment>
            <main className="page-main">
                <LoginForm />
            </main>
            <Footer />
        </Fragment>
    );
}
