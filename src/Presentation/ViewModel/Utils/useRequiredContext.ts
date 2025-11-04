import { useContext } from "react";

export function useRequiredContext<T>(context: React.Context<T | undefined>): T {
	const value = useContext(context);

	if (value === undefined) {
		throw new Error("Context must be used within its provider");
	}
	return value;
}
