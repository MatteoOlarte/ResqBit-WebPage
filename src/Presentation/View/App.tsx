import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Nav from "@Presentation/View/Components/Nav";
import Arch from "@Presentation/View/Pages/Arch";
import Home from "@Presentation/View/Pages/Home";
import SIG from "@Presentation/View/Pages/SIG/SIG";
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
	return (
		<FluentProvider theme={resqBitLightTheme}>
			<BrowserRouter basename="/ResqBit-WebPage">
				<header className="sticky-top">
					<Nav />
				</header>
				
				<Routes />
			</BrowserRouter>
		</FluentProvider>
	);
}

const Routes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/mapa-de-procesos", element: <SIG /> },
		{ path: "/arquitectura", element: <Arch /> },
	]);
	return routes;
};

export default App;
