import { Fragment } from "react";

// CSS imports
import './LoginForm.css'

export default function LoginForm() {
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputName = document.getElementById("name") as HTMLInputElement;
        localStorage.setItem("name", inputName.value);
        const inputPassword = document.getElementById("password") as HTMLInputElement;
        localStorage.setItem("password", inputPassword.value);
    };

    return (
        <Fragment>
            <section className="login-section">
                <form action="../../index.html" onSubmit={handleFormSubmit}>
                    <img src="../assets/images/logo/duck_logo_placeholder.svg" alt="" width="72px" />
                    <h1>Become a member!</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" name="name" id="name" required />
                        <label htmlFor="name">Type in your name:</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" name="password" id="password" required />
                        <label htmlFor="password">Type in password:</label>
                    </div>
                    <div className="checkbox m-3">
                        <input type="checkbox" id="checkbox" value="remember-me" />
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <button type="submit" className="BlackButton btn">Register now!</button>
                </form>
            </section>
        </Fragment>
    );
}