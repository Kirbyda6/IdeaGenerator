import React from 'react';
import Split from './Split';

function IdeaComp({ ideas, newIdea, onDetails }) {

    return (
        <>
            <section>
                <div>
                    <Split ideas={ideas[0]}></Split>
                </div>
                <button onClick={() => onDetails(ideas[0])}>Project Details</button>
                <button>Add To My Collection</button>
            </section>
            <div>
                <button onClick={newIdea}>Generate New Idea</button>
            </div>
        </>
    );
}

export default IdeaComp;