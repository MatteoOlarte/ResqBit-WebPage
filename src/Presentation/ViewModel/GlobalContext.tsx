import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: GlobalProviderProps) {
	const location = useLocation();
	const [InvertorMode, setInvertorMode] = useState<boolean>(false);

	useEffect(() => {
		setInvertorMode(location.pathname.startsWith("/stakeholders"));
	}, [location.pathname]);

	return <GlobalContext.Provider value={{ InvertorMode, setInvertorMode }}>{children}</GlobalContext.Provider>;
}

interface GlobalContextType {
	InvertorMode: boolean;
	setInvertorMode: (mode: boolean) => void;
}

interface GlobalProviderProps {
	children: ReactNode;
}

export { GlobalContext, GlobalProvider };
