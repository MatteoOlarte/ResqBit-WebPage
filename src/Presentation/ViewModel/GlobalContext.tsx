import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: GlobalProviderProps) {
	const location = useLocation();
	const [InvertorMode, setInvertorMode] = useState<boolean>(false);
	const [navbarThresholdValue, setNavbarThresholdValue] = useState<number>(59); // px threshold for navbar style change
	const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

	useEffect(() => {
		if (location.pathname.startsWith("/stakeholders")) {
			setNavbarThresholdValue(150);
		} else {
			setNavbarThresholdValue(59);
		}

		setInvertorMode(location.pathname.startsWith("/stakeholders"));
		setNavbarVisible(location.pathname !== "/stakeholders/iso-standards/processes-map");
	}, [location.pathname]);

	return (
		<GlobalContext.Provider value={{ InvertorMode, navbarThresholdValue, navbarVisible, setInvertorMode }}>
			{children}
		</GlobalContext.Provider>
	);
}

interface GlobalContextType {
	InvertorMode: boolean;
	navbarThresholdValue: number;
	navbarVisible: boolean;
	setInvertorMode: (mode: boolean) => void;
}

interface GlobalProviderProps {
	children: ReactNode;
}

export { GlobalContext, GlobalProvider };
