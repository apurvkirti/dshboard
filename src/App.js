import Create from "./components/create.js";
import Read from "./components/read.js";
import Update from "./components/update.js";
import MyComponent from "./components/prac";
import Comp from "./components/gets";
import Tabz from "./components/tablecell.js";
import Clus from "./components/clus.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
  crossorigin="anonymous"
></link>;
function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          {/* <Route path='/update' element={<Update/>}/> */}
          <Route path="/prac" element={<MyComponent />} />
          <Route path="/gets" element={<Comp />} />
          <Route path="/tab" element={<Tabz/>}/>
          <Route path="/clus" element={<Clus/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
