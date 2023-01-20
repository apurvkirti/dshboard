import Create from "./components/create.js";
import Read from './components/read.js';
import Update from './components/update.js';

import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
      <Routes>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>
          {/* <Route path='/update' element={<Update/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
