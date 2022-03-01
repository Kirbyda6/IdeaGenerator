import React from 'react';
import { Link } from "react-router-dom";

export const Faq = () => {
    return (
        <div className="App-header">
            <span className='main-link'>
                <Link to="/Home" className='link'>Front Page</Link>
            </span>
            <h1>Questions</h1>
            <h2>Is this where I get my Questions answered?</h2>
            <h3> - Yep!</h3>
        </div>
    );
}

export default Faq