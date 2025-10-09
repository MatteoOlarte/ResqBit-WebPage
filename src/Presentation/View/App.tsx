import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Home from "@Presentation/View/Pages/Home";
import SIG from "@Presentation/View/Pages/SIG/SIG";
import Arch from "@Presentation/View/Pages/Arch";
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
	return (
		<FluentProvider theme={resqBitLightTheme}>
			<BrowserRouter basename="/ResqBit-WebPage">
				<Routes />
			</BrowserRouter>
		</FluentProvider>
	);
}

const Routes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/mapa-de-procesos", element: <SIG /> },
		{  path: "/arquitectura", element: <Arch /> },
	]);
	return routes;
};

export default App;
