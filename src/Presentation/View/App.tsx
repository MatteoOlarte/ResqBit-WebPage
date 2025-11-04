import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Nav from "@Presentation/View/Components/Nav";
import Arch from "@Presentation/View/Pages/Arch";
import Home from "@Presentation/View/Pages/Home";
import SIG from "@Presentation/View/Pages/SIG/SIG";
import { GlobalProvider } from "@Presentation/ViewModel/GlobalContext";
import { BrowserRouter, useRoutes } from "react-router-dom";

function App() {
	return (
		<FluentProvider theme={resqBitLightTheme}>
			<BrowserRouter basename="/ResqBit-WebPage">
				<GlobalProvider>
					<header className="sticky-top">
						<Nav />
					</header>

					<Routes />
				</GlobalProvider>
			</BrowserRouter>
		</FluentProvider>
	);
}

const Routes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/stakeholders/iso-standards", element: <SIG /> },
		{ path: "/stakeholders/togaf-architecture", element: <Arch /> },
	]);
	return routes;
};

export default App;
