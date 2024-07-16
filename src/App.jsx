import { Route, Routes } from "react-router-dom";
import ProtFolio from "./Modules/PortFolio/ProtFolio";

function App() {
  return ( 
    <Routes basename="/Protfolio">
      <Route path="/" element={<ProtFolio/>}/>
    </Routes>
  );
}

export default App;
