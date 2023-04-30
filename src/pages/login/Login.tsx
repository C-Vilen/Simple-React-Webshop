import { Fragment } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import LoginForm from "../../components/LoginComponent/LoginForm";
import Footer from "../../components/Footer";
import { Customer } from "../../CustomerContext";

export default function Login(props: {
  updateCustomer: (newCustomer: Customer) => void;
}) {
  return (
    <Fragment>
      <LoginForm updateCustomer={props.updateCustomer} />
      <Footer />
    </Fragment>
  );
}
