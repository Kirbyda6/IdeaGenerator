import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

export const ProjectDetails = ({ selectedIdea }) => {
    return(
      <div className="App-header">
        <div>Idea: {selectedIdea.idea}</div>
        <div>Creator: {selectedIdea.creator}</div>
        <div>Details: {selectedIdea.details}</div>
        <span className='main-link'>
          <Link to="/" className='link'>Front Page</Link><> </>
          <Link to="/MyCollection" className='link'>My Collection</Link>
        </span>
        <h1>Details</h1>
      </div>
    );
}

export default ProjectDetails