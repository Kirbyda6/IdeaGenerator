import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import MakeProject from './pages/MakeProject';
import ProjectDetails from './pages/ProjectDetails';
import MyCollection from './pages/MyCollection';
import Login from './pages/Login';
import Faq from './pages/Faq'

function App() {

    const [selectedIdea, setSelectedIdea] = useState('')
    const [idea, setIdea] = useState('');
    const [bool, toggle] = useState(false);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [collection, setCollection] = useState([])
    const [vote, setVote] = useState()

    const setDefaults = () => {
        setUsername('');
        setPassword('');
        setCollection([]);
    }

    const setToggle = () => {
        toggle(!bool);
    }

    const loadIdea = async () => {
        fetch('/idea')
        .then(res => { return res.json() })
        .then(result => {
            if(result[0] !== undefined) {
                setIdea(result);
                setVote(result[0].votes);
            }
            else {
                setIdea([{idea: "No Ideas Yet!", creator: "You?"}])
                setVote('')
            }
        });
        return
    }

    useEffect(() => {
        loadIdea();
    }, [bool])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} setCollection={setCollection}/>}/>
                <Route path="/Home" element={<HomePage setSelectedIdea={setSelectedIdea} setToggle={setToggle} idea={idea} username={username} setDefaults={setDefaults}
                    setCollection={setCollection} vote={vote} setVote={setVote}/>}/>
                <Route path="/MakeProject" element={<MakeProject username={username}/>}/>
                <Route path="/ProjectDetails" element={<ProjectDetails selectedIdea={selectedIdea}/>}/>
                <Route path="/MyCollection" element={<MyCollection collection={collection}/>}/>
                <Route path="/Faq" element={<Faq/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;