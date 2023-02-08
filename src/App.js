import Login from "./Login";
import Dashboard from "./components/final";
import Notice from "./components/notice";
import Img from "./components/imgs";

import "bootstrap/dist/css/bootstrap.min.css";
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
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/img" element={<Img/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
