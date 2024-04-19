import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Generate from "./pages/Generate";
import Edit from "./pages/Edit";
import Upscale from "./pages/Upscale";
import Inpainting from "./pages/Inpainting";
import Outpainting from "./pages/Outpainting";
import Removebg from "./pages/Removebg";
import Restore from "./pages/Restore";
import Anime from "./pages/Anime";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/upscale" element={<Upscale />} />
      <Route path="/inpainting" element={<Inpainting />} />
      <Route path="/outpainting" element={<Outpainting />} />
      <Route path="/removebg" element={<Removebg />} />
      <Route path="/restore" element={<Restore />} />
      <Route path="/anime" element={<Anime />} />

      

    </Routes>
    
  );
}

export default App;
