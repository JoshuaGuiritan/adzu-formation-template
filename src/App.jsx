import { BrowserRouter, Routes, Route } from "react-router-dom";
import SystemUI from "./components/SystemUI";
import HomePage from "./components/HomePage";
import AdminRecord from "./components/RecordsPage/AdminRecord";
import ConRecord from "./components/RecordsPage/ConRecord";
import CsiteRecord from "./components/RecordsPage/CsiteRecord";
import CsRecord from "./components/RecordsPage/CsRecord";
import FfpRecord from "./components/RecordsPage/FfpRecord";
import PpoRecord from "./components/RecordsPage/PpoRecord";
import SedRecord from "./components/RecordsPage/SedRecord";
import SmaRecord from "./components/RecordsPage/SmaRecord";
import AccInfoPage from "./components/AccInfoPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SystemUI />}>
          <Route index element={<HomePage />}/>
          <Route path="Records/ADMIN" element={<AdminRecord />}/>
          <Route path="Records/FFP" element={<FfpRecord />}/>
          <Route path="Records/CON" element={<ConRecord />}/>
          <Route path="Records/CSITE" element={<CsiteRecord />}/>
          <Route path="Records/SED" element={<SedRecord />}/>
          <Route path="Records/SMA" element={<SmaRecord />}/>
          <Route path="Records/CS" element={<CsRecord />}/>
          <Route path="Records/PPO" element={<PpoRecord />}/>
          <Route path="AccountInformation" element={<AccInfoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
