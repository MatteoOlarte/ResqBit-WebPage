import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Home from "@Presentation/View/Pages/Home";
import SIG from "@Presentation/View/Pages/SIG/SIG";
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
	return (
		<FluentProvider theme={resqBitLightTheme}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</FluentProvider>
	);
}

const Routes = () => {
	let routes = useRoutes([
		{ path: "ResqBit-WebPage/", element: <Home /> },
		{ path: "ResqBit-WebPage/mapa-de-procesos", element: <SIG /> },
	]);
	return routes;
};

export default App;
