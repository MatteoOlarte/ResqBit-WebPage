import biIcon from "@/assets/Home/BI-ICON.jpeg";
import cybersecurityIcon from "@/assets/Home/Cybersecurity-Icon.jpeg";
import docIcon from "@/assets/Home/Document-Management-Icon.jpeg";
import Illustration from "@/assets/Home/Illustration.png";
import isoIcon from "@/assets/Home/ISO-Icon.jpeg";
import { Button, Card, CardHeader, LargeTitle, makeStyles, Text, tokens } from "@fluentui/react-components";
import Footer from "@Presentation/View/Components/Footer";
import clsx from "clsx";
import React from "react";

function Home(): React.JSX.Element {
	const classes = useStyles();

	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main>
				<section className={clsx(classes.heroWrapper, "mb-5")}>
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
								{/* <Button appearance="primary" size="large">
										Registrar
									</Button> */}
								<Button appearance="secondary" size="large">
									Saber más
								</Button>
							</div>
						</div>

						<div className={classes.graphicPlaceholder}>
							<img
								src={Illustration}
								alt="Ilustración hero"
								style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
							/>
						</div>
					</div>
				</section>

				<section className="container w-100 mx-auto mb-5">
					<div className="mb-4">
						<LargeTitle as="h2" block>
							Servicios que ofrecemos a las PYMES
						</LargeTitle>

						<Text size={400} as="p">
							Soluciones integrales para impulsar la confianza, la eficiencia operativa y el crecimiento sostenible.
						</Text>
					</div>

					<div className={classes.capabilitiesGrid}>
						<Card appearance="outline">
							<CardHeader header={<CardHeaderContent title="Auditoría y Certificación ISO" image={isoIcon} />} />
							<Text as="p" size={200} className={classes.capabilityBody}>
								Ejecución de auditorías internas y externas, planes de mejora, certificación en normas ISO (9001, 14001,
								27001, 45001, 21001).
							</Text>
						</Card>

						<Card appearance="outline">
							<CardHeader
								header={
									<CardHeaderContent
										title="Gestión Documental y Protección de Activos de Información"
										image={docIcon}
									/>
								}
							/>
							<Text as="p" size={200} className={classes.capabilityBody}>
								Protección de integridad, disponibilidad y confidencialidad de los activos de información en
								consultorías y auditorías
							</Text>
						</Card>

						<Card appearance="outline">
							<CardHeader
								header={
									<CardHeaderContent title="Gestión de Ciberseguridad y Vulnerabilidades" image={cybersecurityIcon} />
								}
							/>
							<Text as="p" size={200} className={classes.capabilityBody}>
								Servicios de seguridad de la información: pruebas de RedTeam, auditorías de red, OWISAM, ingeniería
								social, instalación de SIEM, acceso seguro en la nube
							</Text>
						</Card>

						<Card appearance="outline">
							<CardHeader
								header={<CardHeaderContent title="Business Intelligence (BI) y Analítica de Datos" image={biIcon} />}
							/>
							<Text as="p" size={200} className={classes.capabilityBody}>
								Modelado, validación, creación de tableros de control, capacitación y soporte
							</Text>
						</Card>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

function CardHeaderContent(props: { title: string; image?: string }): React.JSX.Element {
	const classes = useStyles();

	return (
		<div className="d-flex align-items-center gap-2">
			{props.image ? (
				<img src={props.image} alt={props.title} className={classes.capabilityIcon} />
			) : (
				<div className={classes.capabilityIconPlaceholder}>Img</div>
			)}

			<Text weight="semibold" as="h3" size={400} className="flex-grow-1">
				{props.title}
			</Text>
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
	capabilitiesGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
		gap: "1.75rem",
		"@media (max-width: 450px)": {
			gridTemplateColumns: "1fr",
		},
	},
	capabilityIconPlaceholder: {
		minWidth: "44px",
		minHeight: "44px",
		borderRadius: "10px",
		background: tokens.colorNeutralBackground3,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: tokens.colorNeutralForeground3,
		fontSize: "12px",
		fontWeight: 600,
	},
	capabilityIcon: {
		width: "44px",
		height: "44px",
		borderRadius: "10px",
		objectFit: "cover",
	},
	capabilityBody: {
		marginTop: "0.5rem",
		color: tokens.colorNeutralForeground2,
		lineHeight: 1.35,
	},
});

export default Home;
