import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
const Generate = lazy(() => import("./pages/Generate"));
const Edit = lazy(() => import("./pages/Edit"));
const Upscale = lazy(() => import("./pages/Upscale"));
const Inpainting = lazy(() => import("./pages/Inpainting"));
const Outpainting = lazy(() => import("./pages/Outpainting"));
const Removebg = lazy(() => import("./pages/Removebg"));
const Restore = lazy(() => import("./pages/Restore"));
const Anime = lazy(() => import("./pages/Anime"));
const Error = lazy(() => import("./pages/Error"));

function App() {
	return (
		<Suspense fallback={<div></div>}>
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
				<Route path="*" element={<Error />} />
			</Routes>
		</Suspense>
	);
}

export default App;
