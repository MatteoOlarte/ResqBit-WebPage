import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { FluentProvider } from "@fluentui/react-components";
import Home from "@Presentation/View/Pages/Home";
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
	let routes = useRoutes([{ path: "/", element: <Home /> }]);
	return routes;
};

export default App;
