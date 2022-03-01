import React from 'react';
import CollectionRow from './CollectionRow';

function CollectionComp({ collection }) {
    if(collection.length === 0){
        return(
            <tr>
                <td colSpan={3} style={{textAlign:"center"}}>Empty</td>
            </tr>
        )
    }
    else {
        return(
            collection.map((x, i) => <CollectionRow element={x} key={i}/>)
        )
    }
    
}

export default CollectionComp