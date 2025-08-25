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
          <Route index element={<HomePage />} />
          <Route path="records/admin" element={<AdminRecord />} />
          <Route path="records/ffp" element={<FfpRecord />} />
          <Route path="records/con" element={<ConRecord />} />
          <Route path="records/csite" element={<CsiteRecord />} />
          <Route path="records/sed" element={<SedRecord />} />
          <Route path="records/sma" element={<SmaRecord />} />
          <Route path="records/cs" element={<CsRecord />} />
          <Route path="records/ppo" element={<PpoRecord />} />
          <Route path="account-information" element={<AccInfoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;