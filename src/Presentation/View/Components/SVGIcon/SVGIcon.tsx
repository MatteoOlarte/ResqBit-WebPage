import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import React, { type ComponentProps } from "react";

const useStyles = makeStyles({
	root1: { fill: tokens.colorBrandBackground, verticalAlign: "middle" },
	root2: { fill: tokens.colorNeutralForeground1, verticalAlign: "middle" },
	root3: { fill: tokens.colorNeutralForegroundInverted, verticalAlign: "middle" },
});

function ResqBitIcon({
	className,
	width = 32,
	height = 32,
	appearance = "primary",
	...props
}: ResqBitIconProps): React.JSX.Element {
	const classes = useStyles();
	const styles: Record<Appearance, string> = {
		primary: classes.root1,
		secondary: classes.root2,
		tertiary: classes.root3,
	};

	return (
		<svg
			className={mergeClasses(styles[appearance], className)}
			xmlns="http://www.w3.org/2000/svg"
			version="1.0"
			width={width}
			height={height}
			viewBox="0 0 509 490"
			preserveAspectRatio="xMidYMid meet"
			aria-hidden
			role="heading"
			{...props}
		>
			<g transform="translate(0,490) scale(0.1,-0.1)" stroke="none">
				<path d="M955 4605 c-251 -46 -465 -245 -529 -492 -14 -54 -16 -233 -16 -1653 0 -1769 -5 -1641 68 -1790 27 -57 57 -96 122 -161 94 -94 154 -133 275 -176 l80 -28 1600 0 c1522 0 1603 1 1665 18 245 70 434 274 485 522 14 72 15 241 13 1650 l-3 1570 -27 80 c-85 248 -272 412 -526 461 -104 20 -3099 19 -3207 -1z m2233 -1042 l2 -553 510 0 510 0 0 -655 c0 -360 0 -658 0 -662 0 -5 -63 -9 -140 -11 l-140 -3 0 -134 0 -135 -145 0 -144 0 -3 133 -3 132 -220 0 -220 0 0 -215 0 -215 133 -3 132 -3 0 -149 0 -149 -132 -3 -133 -3 -3 -147 -3 -148 -144 0 -144 0 -3 83 -3 82 -505 2 c-278 2 -511 3 -517 3 -10 0 -13 94 -13 435 l0 435 -475 0 -475 0 0 665 0 665 475 0 475 0 0 548 c0 302 3 552 7 555 3 4 301 6 662 4 l656 -2 3 -552z" />
			</g>
		</svg>
	);
}

type Appearance = "primary" | "secondary" | "tertiary";

interface ResqBitIconProps extends ComponentProps<"svg"> {
	width?: number;
	height?: number;
	appearance?: Appearance;
}

export default ResqBitIcon;
