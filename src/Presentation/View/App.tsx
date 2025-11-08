import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Nav from "@Presentation/View/Components/Nav";
import Arch from "@Presentation/View/Pages/Arch";
import FAQ from "@Presentation/View/Pages/FAQ/FAQ";
import Governance from "@Presentation/View/Pages/Governance/Governance";
import Home from "@Presentation/View/Pages/Home";
import SIG from "@Presentation/View/Pages/SIG/SIG";
import Strategies from "@Presentation/View/Pages/Strategies/Strategies";
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
		{ path: "/stakeholders/leadership-and-governance", element: <Governance /> },
		{ path: "/stakeholders/business-strategies", element: <Strategies /> },
		{ path: "/stakeholders/faq", element: <FAQ /> },
		{ path: "/stakeholders/togaf-architecture", element: <Arch /> },
	]);
	return routes;
};

export default App;
