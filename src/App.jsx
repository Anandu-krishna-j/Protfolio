import { Route, Routes } from "react-router-dom";
import ProtFolio from "./Modules/PortFolio/ProtFolio";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<ProtFolio/>}/>
    </Routes>
  );
}

export default App;
