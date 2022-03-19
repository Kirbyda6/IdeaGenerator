import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import IdeaComp from '../components/IdeaComp';

function HomePage({ setSelectedIdea, setToggle, idea, username, setDefaults, setCollection, vote, setVote }) {

    const navigate = useNavigate();

    const onDetails = (idea) => {
        setSelectedIdea(idea);
        navigate("/ProjectDetails");
    }

    const addToCollection = (idea) => {
        if(idea.idea !== "No Ideas Yet!") {
            fetch(`/users/${username}`, {
                method: 'PUT',
                body: JSON.stringify({'idea': idea.idea, 'creator': idea.creator}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(
                fetch('/collection?' + encodeURIComponent('username') + '=' + encodeURIComponent(username), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(data => data.json())
                .then(res => {
                    setCollection(res.ideaCollection);
                    navigate("/MyCollection");
                })
            )
        }
        
    }

    return (
        <div className="main" id='Home'>
            <h1>Idea Generator!</h1>
            <IdeaComp ideas={idea} newIdea={setToggle} onDetails={onDetails} addToCollection={addToCollection} vote={vote} setVote={setVote}></IdeaComp>
            <span className='corner-links'>
                <Link to="/Faq" className='link'>FAQ</Link><> </>
                <Link to="/MyCollection" className='link'>My Collection</Link><> </>
                <Link to="/" className='link' onClick={setDefaults}>Log Out</Link>
            </span>
            <button onClick={() => navigate('/MakeProject')} className='button' id='makeProj'><span>Make A Project </span></button>
        </div>
    );
}

export default HomePage;