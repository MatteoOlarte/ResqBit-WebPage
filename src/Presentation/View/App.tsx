import { resqBitLightTheme } from "@/Presentation/Base/colors";
import { Button, FluentProvider } from "@fluentui/react-components";
import "./App.css";

function App() {
	return (
		<FluentProvider theme={resqBitLightTheme}>
			<Button appearance="primary">Hello World</Button>
		</FluentProvider>
	);
}

export default App;
