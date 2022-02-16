import React from 'react';
import { Link } from "react-router-dom";

export const MyCollection = () => {
    return(
      <div className="App-header">
        <span className='main-link'>
          <Link to="/" className='link'>Front Page</Link>
        </span>
        <h1>My Collection</h1>
        <table>
          <tr>
            <td> Idea: Jubotron </td>
            <td> Votes: 5 </td>
            <td><a href='www.google.com'>Github link</a></td>
          </tr>
        </table>
      </div>
        
    );
}

export default MyCollection