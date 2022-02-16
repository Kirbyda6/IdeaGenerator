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
import Faq from './pages/Faq'

function App() {

  const [selectedIdea, setSelectedIdea] = useState()
  const [idea, setIdea] = useState([]);
  const [bool, toggle] = useState(false);

  const setToggle = () => {
    toggle(!bool)
  }
  
  const loadIdea = async () => {
      fetch('/idea')
      .then((res) => {return res.json()})
      .then(result => {setIdea(result)})
  }

  useEffect(() => {
      loadIdea();
      }, [bool])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setSelectedIdea={setSelectedIdea} setToggle={setToggle} idea={idea} bool= {bool}/>} />
        <Route path="/MakeProject" element={<MakeProject />} />
        <Route path="/ProjectDetails" element={<ProjectDetails selectedIdea={selectedIdea}/>} />
        <Route path="/MyCollection" element={<MyCollection />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;