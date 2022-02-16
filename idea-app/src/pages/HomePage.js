import '../App.css';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import IdeaComp from '../components/IdeaComp';

function HomePage({ setSelectedIdea, setToggle, idea, bool }) {

  const navigate = useNavigate()

  const onDetails = (idea) => {
    setSelectedIdea(idea)
    navigate("/ProjectDetails")
  }

  const addToCollection = (idea) => {
    setSelectedIdea(idea)
    navigate("/ProjectDetails")
  }

  return (
    <div className="App-header">
      <h1>Idea Generator</h1>
      <IdeaComp ideas={idea} newIdea={setToggle} onDetails={onDetails}></IdeaComp>
      <span className='main-link'>
        <Link to="/Faq" className='link'>FAQ</Link><> </>
        <Link to="/MyCollection" className='link'>My Collection</Link>
      </span>
      <Link to="/MakeProject" className='link'>Make A Project</Link>
    </div>
  );
}

export default HomePage;