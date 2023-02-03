import GetCivilTech from "./components/civil/getCivilTech.js";
import UpdateCivilTech from "./components/civil/updateCivilTech.js";
import GetCivilWks from "./components/civil/getCivilWks.js";
import UpdateCivilWks from "./components/civil/updateCivilWks.js";

import UpdateDelTech from "./components/delivery/updateDelTech.js";
import GetDelTech from "./components/delivery/getDelTech.js";
import GetDelWks from "./components/delivery/getDelWks.js";
import UpdateDelWks from "./components/delivery/updateDelWks.js";

import UpdateInsTech from "./components/installation/updateInsTech.js";
import GetInsTech from "./components/installation/getInsTech.js";
import GetInsWks from "./components/installation/getInsWks.js";
import UpdateInsWks from "./components/installation/updateInsWks.js";


import Clus from "./components/clusterChart.js";
import Chart from "./components/chart.js";
import Final from "./components/final.js";
import LastChanges from "./components/updatebox";
import AddNotice from "./components/notice";
import NotesList from "./components/getnotice";
import Helper from "./components/helper";

import New from "./components/indchart.js";


import 'bootstrap/dist/css/bootstrap.min.css';
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
          

       
        
          {/* <Route path='/update' element={<Update/>}/> */}
      

          <Route path="/getct" element={<GetCivilTech/>} />
          <Route path="/updct" element={<UpdateCivilTech/>}/>
          <Route path="/getcwks" element={<GetCivilWks/>}/>
          <Route path="/updcwks" element={<UpdateCivilWks/>}/>

          <Route path="/getdt" element={<GetDelTech/>}/>
          <Route path="/getdwks" element={<GetDelWks/>}/>
          <Route path="/upddt" element={<UpdateDelTech/>}/>
          <Route path="/upddwks" element={<UpdateDelWks/>}/>

          <Route path="/updit" element={<UpdateInsTech/>}/>
          <Route path="/getit" element={<GetInsTech/>}/>
          <Route path="/getiwks" element={<GetInsWks/>}/>
          <Route path="/updiwks" element={<UpdateInsWks/>}/>

          <Route path="/clus" element={<Clus/>}/>
          <Route path="/chart" element={<Chart/>}/>
          
          <Route path="/new" element={<New/>}/>
          <Route path="/db" element={<Final/>}/>
          <Route path="/ub" element={<LastChanges/>}/>
          <Route path="/notice" element={<AddNotice/>}/>
          <Route path="/getnotice" element={<NotesList/>}/>
          <Route path="/helper" element={<Helper/>}/>
         
      
        </Routes>
        {/* <div>
         <GetCivilTech/>
         <GetDelTech/>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
