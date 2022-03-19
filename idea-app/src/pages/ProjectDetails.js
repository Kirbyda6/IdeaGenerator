import React from 'react';
import { Link } from "react-router-dom";

export const ProjectDetails = ({ selectedIdea }) => {
    return (
        <div className="main">
            <h1>Details</h1>
            <div className='deats'><h2>Idea: </h2><span>{selectedIdea.idea}</span></div>
            <div className='deats'><h2>Creator: </h2><span>{selectedIdea.creator}</span></div>
            <div className='deats'><h2>Details: </h2></div>
            <p id='detailContents'>{selectedIdea.details}</p>
            <span className='corner-links'>
                <Link to="/Home" className='link'>Front Page</Link><> </>
                <Link to="/MyCollection" className='link'>My Collection</Link>
            </span>
        </div>
    );
}

export default ProjectDetails