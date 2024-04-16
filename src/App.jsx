import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Landingpage />} />
    </Routes>
    
  );
}

export default App;
