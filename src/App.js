import Login from "./Login";
import About from "./about";


import DashboardAssam from "./states/assam/dashboardAssam";
import DashboardBihar from "./states/bihar/dashboardBihar";
import DashboardTamilNadu from "./states/tamilNadu/dashboardTamilNadu";

import UploadImgAssam from "./states/assam/uploadimgAssam";
import UploadImgBihar from "./states/bihar/uploadimgBihar";
import UploadImgTamilNadu from "./states/tamilNadu/uploadimgTamilNadu";

import GallaryAssam from "./states/assam/gallary";
import GallaryBihar from "./states/bihar/gallary";
import GallaryTamilNadu from "./states/tamilNadu/gallary";


import PDFAssam from "./states/assam/pdfButton";
import PDFBihar from "./states/bihar/pdfButton";
import PDFTamilNadu from "./states/tamilNadu/pdfButton";

// import Notice from "./states/"; not required
// import Del from "./components/deletenotice"; not required
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
          <Route path="/" element={<Login/>} />
          <Route path="/about" element={<About/>}/>

          <Route path="/dashboardAssam" element={<DashboardAssam/>} />
          <Route path="/dashboardBihar" element={<DashboardBihar/>} />
          <Route path="/dashboardTamilNadu" element={<DashboardTamilNadu/>} />

          <Route path="/uploadImageAssam" element={<UploadImgAssam/>}/>
          <Route path="/uploadImageBihar" element={<UploadImgBihar/>}/>
          <Route path="/uploadImageTamilNadu" element={<UploadImgTamilNadu/>}/>

          <Route path="/gallaryAssam" element={<GallaryAssam/>}/>
          <Route path="/gallaryBihar" element={<GallaryBihar/>}/>
          <Route path="/gallaryTamilNadu" element={<GallaryTamilNadu/>}/>

          <Route path="/pdfAssam" element={<PDFAssam/>}/>
          <Route path="/pdfBihar" element={<PDFBihar/>}/>
          <Route path="/pdfTamilNadu" element={<PDFTamilNadu/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
