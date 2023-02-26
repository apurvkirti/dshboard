import Login from "./Login";
import Dashboard from "./components/final";
import Notice from "./components/notice";
import Upload from "./components/uploadimg";
import Mail from "./components/sendmail";
import Gallary from "./components/gallary";
import Del from "./components/deletenotice";
import Abt from "./components/about";
import PDF from "./components/pdfButton";
import Update from "./components/updatebox";



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
          <Route path="/upd" element={<Upload/>}/>
          <Route path="/mail" element={<Mail/>}/>
          <Route path="/gallary" element={<Gallary/>}/>
          <Route path="/del" element={<Del/>}/>
          <Route path="/about" element={<Abt/>}/>
          <Route path="/pdf" element={<PDF/>}/>
          <Route path="/update" element={<Update/>}/>
        
    
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
