import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Nav from "@Presentation/View/Components/Nav";
import Arch from "@Presentation/View/Pages/Arch";
import FAQ from "@Presentation/View/Pages/FAQ/FAQ";
import Governance from "@Presentation/View/Pages/Governance/Governance";
import Home from "@Presentation/View/Pages/Home";
import Map from "@Presentation/View/Pages/Map";
import Reviews from "@Presentation/View/Pages/Reviews";
import Services from "@Presentation/View/Pages/Services";
import SIG from "@Presentation/View/Pages/SIG/SIG";
import Strategies from "@Presentation/View/Pages/Strategies/Strategies";
import { GlobalProvider } from "@Presentation/ViewModel/GlobalContext";
import { useEffect } from "react";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { GlobalContext } from "../ViewModel/GlobalContext";
import { useRequiredContext } from "../ViewModel/Utils/useRequiredContext";

function App() {
	return (
		<FluentProvider theme={resqBitLightTheme}>
			<BrowserRouter basename="/ResqBit-WebPage">
				<GlobalProvider>
					<ScrollToTop />
					<Header />
					<Routes />
				</GlobalProvider>
			</BrowserRouter>
		</FluentProvider>
	);
}

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function Header() {
	const global_C = useRequiredContext(GlobalContext);

	return (
		<header className="sticky-top">
			<Nav threshold={global_C.navbarThresholdValue} />
		</header>
	);
}

const Routes = () => {
	const routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/services", element: <Services /> },
		{ path: "/reviews", element: <Reviews /> },
		{ path: "/stakeholders/iso-standards", element: <SIG /> },
		{ path: "/stakeholders/iso-standards/processes-map", element: <Map /> },
		{ path: "/stakeholders/leadership-and-governance", element: <Governance /> },
		{ path: "/stakeholders/business-strategies", element: <Strategies /> },
		{ path: "/stakeholders/faq", element: <FAQ /> },
		{ path: "/stakeholders/togaf-architecture", element: <Arch /> },
	]);
	return routes;
};

export default App;
