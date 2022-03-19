import { React } from 'react';
import Split from './Split';
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

function IdeaComp({ ideas, newIdea, onDetails, addToCollection, vote, setVote }) {

    const updateVotes = (idea, change, id) => {
        if(vote + change < -5 && idea.idea !== "No Ideas Yet!") {
            fetch(`/ideas/${idea.idea}`, {
                method: 'DELETE'
            })
            .then(
                newIdea()
            )
        } else if (idea.idea !== "No Ideas Yet!") {
        setVote(vote + change);
        fetch(`/ideas/${idea.idea}`, {
            method: 'PUT',
            body: JSON.stringify({'votes': vote + change}),
            headers: {
                'Content-Type': 'application/json',
            }
        })}
        document.getElementById(id).checked = false
    }

    return (
        <>
            <section>
                <div>
                    <div id='comp'>
                        <div id='voting'>
                            <input type="checkbox" id="upcheckbox"/>
                            <label for="upcheckbox" id='up'>
                                <BiUpArrow onClick={() => updateVotes(ideas[0], 1, 'downcheckbox')}/>
                            </label>
                            <div>{vote}</div>
                            <input type="checkbox" id="downcheckbox"/>
                            <label for="downcheckbox" id='down'>
                                <BiDownArrow onClick={() => updateVotes(ideas[0], -1, 'upcheckbox')}/>
                            </label>
                        </div>
                        <div id='idea'><Split ideas={ideas[0]}></Split></div>
                    </div>
                </div>
                <div id='idea-buttons'>
                    <button onClick={() => {onDetails(ideas[0])}} className='button'><span>Project Details </span></button>
                    <button onClick={() => {addToCollection(ideas[0])}} className='button'><span>Add To Collection </span></button>
                </div>
                
            </section>
            <div>
                <button onClick={newIdea} className='button' id='newidea'><span>Generate New Idea </span></button>
            </div>
        </>
    );
}

export default IdeaComp;