import React from 'react';
import { Link } from "react-router-dom";

export const Faq = () => {
    return (
        <div className="main" id='faq'>
            <span className='corner-links'>
                <Link to="/Home" className='link'>Front Page</Link>
            </span>
            <h1>Questions</h1>
            <h2 className='question'>How does this work?</h2>
            <h3 className='answer'>
                <p>
                    This website is a place to share project ideas that you have, but don't have
                    the time or know-how to persue. It is also a place to go to get ideas! You
                    can cycle through random ideas until you find something you like and add it to
                    your collection. Once in your collection, you can then choose to make a Github
                    repo directly from the website!
                </p>
            </h3>
            <h2 className='question'>How do I make a Github repo?</h2>
            <h3 className='answer'>
                <p>
                    You first need to go to your Github account and then navigate to settings. Once
                    in the settings, you will then have to go into developer settings where you will
                    have to create a personal access token. You just have to give access to the repo
                    scope as that is all that is needed to create a new repo. Save this token somewhere
                    safe and then input it into the prompt when you click the Github icon in your
                    collection table.
                </p>
            </h3>
            <h2 className='question'>How does voting work?</h2>
            <h3 className='answer'>
                <p>
                    Voting is a way to show that you like an idea or dislike the idea. Ideas that reach
                    bellow a threshold of -5 votes get deleted from the idea database.
                </p>
            </h3>
        </div>
    );
}

export default Faq