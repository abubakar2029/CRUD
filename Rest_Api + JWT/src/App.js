import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PatientRegistration from "./Components/PatientRegistration/PatientRegistration";
import Records from "./Pages/Records/Records";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
