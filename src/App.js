import './App.css';
import React  from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CreateToken from './Pages/Create-Token';
import Guide from './Pages/Guide';
import Audit from './Pages/Audit';
import MyToken from './Pages/My-Token';

function App() {
  return (
    <div className="bg-darkblue">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createtoken" element={<CreateToken />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/mytoken" element={<MyToken />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
