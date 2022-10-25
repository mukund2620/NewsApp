import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0)



 
    return (
      <div style={{background: "lightgrey"}}>
        <Router>
        
        <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        
      />
        
       

        

        <Routes>
          <Route  exact strict path="/" element={<News setProgress={setProgress}  key="general" pageSize={8} country={"in"} category={"general"} title="GENERAL"/>} />
          <Route  exact strict path="/business" element={<News setProgress={setProgress} key="business" pageSize={8} country={"in"} category={"business"} title="BUSINESS"/>} />
          <Route  exact strict path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={8} country={"in"} category={"entertainment"} title="ENTERTAINMENT"/>} />
          <Route  exact strict path="/health" element={<News setProgress={setProgress} key="health" pageSize={8} country={"in"} category={"health"} title="HEALTH"/>} />
          <Route  exact strict path="/science" element={<News setProgress={setProgress} key="science" pageSize={8} country={"in"} category={"science"} title="SCIENCE"/>} />
          <Route  exact strict path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={8} country={"in"} category={"sports"} title="SPORTS"/>} />
          <Route  exact strict path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={8} country={"in"} category={"technology"} title="TECHNOLOGY"/>} />
        </Routes>
        </Router>
      </div>
    )
  }

  export default App