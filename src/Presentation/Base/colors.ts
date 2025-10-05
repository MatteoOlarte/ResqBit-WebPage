import type { BrandVariants, Theme } from "@fluentui/react-components";
import { createLightTheme } from "@fluentui/react-components";

const lightThemeBrand: BrandVariants = {
	10: "#1c0505",
	20: "#250606",
	30: "#2f0808",
	40: "#380a0a",
	50: "#410b0b",
	60: "#4a0d0d",
	70: "#540e0e",
	80: "#5d1010",
	90: "#6d2828",
	100: "#7d4040",
	110: "#8e5858",
	120: "#9e7070",
	130: "#ae8888",
	140: "#be9f9f",
	150: "#ceb7b7",
	160: "#dfcfcf",
};

export const resqBitLightTheme: Theme = createLightTheme(lightThemeBrand);
