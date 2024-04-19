import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Generate from "./pages/Generate";
import Generate2 from "./pages/Generate2";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/generate" element={<Generate2 />} />
      <Route path="/generate2" element={<Generate />} />
    </Routes>
    
  );
}

export default App;
