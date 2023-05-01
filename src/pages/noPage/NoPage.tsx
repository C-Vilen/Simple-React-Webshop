import { Fragment } from 'react';

// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';
import './NoPage.css'

export default function NoPage() {
    return (
        <Fragment>
            <div className="container noPage">
                <h1>404: This URL doesn't exist.</h1>
                <h4>Please try another URL.</h4>
                <img className='sadDuck' src="assets/images/sad-duck.jpeg" alt=""></img>
            </div>
        </Fragment>
    );
}