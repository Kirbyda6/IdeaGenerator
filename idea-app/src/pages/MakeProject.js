import { React, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function MakeProject({ username }) {

    const [idea, setIdea] = useState('');
    const votes = 1
    const creator = username
    const [details, setDetails] = useState('');

    const navigate = useNavigate()

    const addIdea = async (i) => {
        i.preventDefault();
        const newIdea = { idea, votes, creator, details };
        const response = await fetch('/ideas', {
            method: 'POST',
            body: JSON.stringify(newIdea),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            alert("Successfully added the idea!");
        } else {
            alert(`Failed to add idea, status code = ${response.status}`);
        }

        navigate("/Home");
    };

    return (
        <div className="main">
            <span className='corner-links'>
                <Link to="/Home" className='link'>Front Page</Link><> </>
                <Link to="/MyCollection" className='link'>My Collection</Link>
            </span>
            <h1>Make A Project</h1>
            <h3>What would you like the name of your idea to be?</h3>
            <input className='ideaCreation'
                type="text"
                placeholder="Idea!"
                value={idea}
                onChange={idea => setIdea(idea.target.value)} />
            <h3>Give us some details of your idea</h3>
            <textarea className='ideaCreation' id='details'
                type="text"
                rows={5}
                placeholder="Details!"
                value={details}
                onChange={idea => setDetails(idea.target.value)} />
            <button onClick={addIdea} className='button'><span>Create </span></button>
        </div>
    );
}

export default MakeProject