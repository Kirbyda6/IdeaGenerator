import { React, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from "react-router-dom";

export const MakeProject = () => {

    const [idea, setIdea] = useState('');
    const votes = 1
    const [creator, setCreator] = useState('');
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

      if(response.status === 201){
          alert("Successfully added the idea!");
      } else {
          alert(`Failed to add idea, status code = ${response.status}`);
      }

      navigate("/");
    };

    return (
        <div className="App-header">
            <span className='main-link'>
                <Link to="/" className='link'>Front Page</Link><> </>
                <Link to="/MyCollection" className='link'>My Collection</Link>
            </span>
            <h1>Make A Project</h1>
            <input
                type="text"
                placeholder="Enter idea here"
                value={idea}
                onChange={idea => setIdea(idea.target.value)} />
            <input
                type="text"
                min={1}
                placeholder="Enter Name here"
                value={creator}
                onChange={idea => setCreator(idea.target.value)} />
            {/* <input
                type="textbox"
                placeholder="Enter details here"
                value={details}
                onChange={idea => setDetails(idea.target.value)} /> */}
            <textarea
                placeholder="Enter details here"
                rows="5"
                cols="21"
                value={details}
                onChange={idea => setDetails(idea.target.value)}/>
            <button onClick={addIdea}>Create</button>
        </div>
    );
}

export default MakeProject