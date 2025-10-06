import { Button, makeStyles, Text, tokens } from "@fluentui/react-components";
import Footer from "@Presentation/View/Components/Footer";
import Nav from "@Presentation/View/Components/Nav";
import React from "react";

function Home(): React.JSX.Element {
	const classes = useStyles();
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "auto 1fr auto",
				height: "100vh",
			}}
		>
			<div>
				<Nav />
			</div>
			<div>
				<main>
					<section className={classes.heroWrapper}>
						<div className={classes.hero}>
							<div className={classes.heroInner}>
								<Text className={classes.heroTitle} weight="semibold" as="h1">
									Del caos a la calma
									<span className={classes.heroTitleAccent}>en un bit</span>
								</Text>

								<Text className={classes.heroSubtitle} as="p">
									Brindar a PYMES del sector tecnológico soluciones de auditoría y mejora continua en Business
									Intelligence, Seguridad de la Información y Certificaciones ISO.
								</Text>

								<div className={classes.ctaGroup}>
									<Button appearance="primary" size="large">
										Registrar
									</Button>
									<Button appearance="secondary" size="large">
										Saber más
									</Button>
								</div>
							</div>

							<div className={classes.graphicPlaceholder}>Área para gráfico / ilustración</div>
						</div>
					</section>
				</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	hero: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "3rem",
		alignItems: "center",
		width: "100%",
		maxWidth: "1200px",
		margin: "0 auto",
		padding: "4rem 2rem",

		"@media (max-width: 800px)": {
			gridTemplateColumns: "1fr",
			padding: "3rem 1.5rem",
		},
	},
	heroWrapper: {
		background: tokens.colorNeutralBackground2,
	},
	heroTitle: {
		fontFamily: "Benguiat Regular, var(--font-family-base)",
		color: tokens.colorNeutralForeground1,
		fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
		lineHeight: 1.1,
		margin: 0,
	},
	heroTitleAccent: {
		color: tokens.colorBrandForegroundLink,
		display: "block",
	},
	heroSubtitle: {
		color: tokens.colorNeutralForeground3,
		marginTop: "1.25rem",
		marginBottom: "2rem",
		maxWidth: "48ch",
		fontSize: "0.95rem",
		lineHeight: 1.4,
	},
	ctaGroup: {
		display: "flex",
		gap: "1rem",
		flexWrap: "wrap",
	},
	graphicPlaceholder: {
		width: "100%",
		minHeight: "340px",
		borderRadius: "12px",
		background: `repeating-linear-gradient(45deg, ${tokens.colorNeutralStroke1} 0 10px, transparent 10px 20px)`,
		outline: `2px dashed ${tokens.colorNeutralStroke1}`,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: tokens.colorNeutralForeground4,
		fontSize: "0.9rem",
		fontStyle: "italic",
		"@media (max-width: 800px)": {
			order: -1,
			minHeight: "260px",
		},
	},
	heroInner: {
		display: "flex",
		flexDirection: "column",
	},
});

export default Home;
