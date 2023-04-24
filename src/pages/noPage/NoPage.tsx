import { Fragment } from 'react';

// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

export default function NoPage() {
    return (
        <Fragment>
            <div className="container">
                <h1 className='text-center'>404: Try another URL</h1>
                <img className='' src="assets/images/sad-duck.jpeg" alt=""></img>
            </div>
        </Fragment>
    );
}