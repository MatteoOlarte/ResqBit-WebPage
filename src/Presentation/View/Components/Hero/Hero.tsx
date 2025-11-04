import { Display, makeStyles, tokens } from "@fluentui/react-components";
import clsx from "clsx";

interface HeroProps {
	title: string;
	image: string;
}

function Hero({ title, image }: HeroProps) {
	const classes = useStyles();

	return (
		<section
			className={clsx(classes.heroSection, "mb-5")}
			style={{ backgroundImage: `url(${image})` }}
			aria-label={title}
		>
			<div className={classes.overlay}></div>

			<div className="container">
				<Display as="h1" className={classes.heroTitle}>
					{title}
				</Display>
			</div>
		</section>
	);
}

const useStyles = makeStyles({
	heroSection: {
		position: "relative",
		width: "100%",
		minHeight: "42vh",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		alignItems: "flex-end",
		justifyContent: "flex-start",
    padding: "2rem 0",

		"@media (min-width: 768px)": {
			minHeight: "56vh",
		},
	},
	overlay: {
		position: "absolute",
		inset: 0,
		background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.35) 100%)",
	},
	heroTitle: {
		position: "relative",
		zIndex: 1,
		color: tokens.colorNeutralForegroundInverted,
		margin: 0,
		textShadow: "0 2px 12px rgba(0,0,0,0.55)",
		fontSize: "clamp(2rem, 8vw, 4rem)",
		lineHeight: 1.1,
	},
});

export default Hero;
