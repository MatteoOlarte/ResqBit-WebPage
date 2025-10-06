import App from "@/Presentation/View/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
