import React from 'react';
import { Link } from "react-router-dom";
import CollectionComp from '../components/CollectionComp';

function MyCollection({ collection }) {
    return (
        <div className="main">
            <span className='corner-links'>
                <Link to="/Home" className='link'>Front Page</Link>
            </span>
            <h1>My Collection</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Idea</th>
                        <th>Creator</th>
                        <th style={{textAlign:"center"}}>Create GitHub Repo?</th>
                    </tr>
                    <CollectionComp collection={collection}/>
                </tbody>
            </table>
        </div>

    );
}

export default MyCollection