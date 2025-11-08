import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: GlobalProviderProps) {
	const location = useLocation();
	const [InvertorMode, setInvertorMode] = useState<boolean>(false);
	const [navbarThresholdValue, setNavbarThresholdValue] = useState<number>(59); // px threshold for navbar style change

	useEffect(() => {
		if (location.pathname.startsWith("/stakeholders")) {
			setNavbarThresholdValue(589);
		} else {
			setNavbarThresholdValue(59);
		}
		setInvertorMode(location.pathname.startsWith("/stakeholders"));
	}, [location.pathname]);

	return (
		<GlobalContext.Provider value={{ InvertorMode, navbarThresholdValue, setInvertorMode }}>
			{children}
		</GlobalContext.Provider>
	);
}

interface GlobalContextType {
	InvertorMode: boolean;
	setInvertorMode: (mode: boolean) => void;
	navbarThresholdValue: number;
}

interface GlobalProviderProps {
	children: ReactNode;
}

export { GlobalContext, GlobalProvider };
