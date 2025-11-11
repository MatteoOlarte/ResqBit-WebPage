import serviceImage1 from "@/assets/Services/Image-01.jpg";
import serviceImage2 from "@/assets/Services/Image-02.jpg";
import serviceImage3 from "@/assets/Services/Image-03.jpg";
import {
	Card,
	CardHeader,
	Image,
	LargeTitle,
	makeStyles,
	Subtitle1,
	Subtitle2,
	Text,
	tokens,
} from "@fluentui/react-components";
import {
	CheckmarkCircle20Filled,
	DataUsage20Filled,
	DocumentBulletList20Filled,
	LeafTwo20Filled,
	ShieldCheckmark20Filled,
} from "@fluentui/react-icons";
import Footer from "@Presentation/View/Components/Footer";
import React from "react";

function Services(): React.JSX.Element {
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
				{/* Hero Section */}
				<section className={classes.heroWrapper}>
					<div className={classes.hero}>
						<div className={classes.heroContent}>
							<LargeTitle as="h1" block>
								Nuestros Servicios
							</LargeTitle>
							<Text as="p" size={500} className={classes.heroSubtitle}>
								Soluciones digitales integrales que combinan sostenibilidad, analítica de datos, certificación de
								calidad, protección de la información y ciberseguridad para impulsar la confianza y la eficiencia en las
								PYMES.
							</Text>
						</div>
						<div className={classes.heroImageContainer}>
							<Image src={serviceImage1} alt="Servicios ResQBit" className={classes.heroImage} />
						</div>
					</div>
				</section>

				{/* Services Grid */}
				<section className="container mb-5">
					<div className="mb-4">
						<Subtitle1 as="h2" block className="mb-2">
							Servicios Especializados
						</Subtitle1>
						<Text as="p" size={400}>
							Ofrecemos una amplia gama de servicios diseñados específicamente para las necesidades de las PYMES del
							sector tecnológico.
						</Text>
					</div>

					<div className={classes.servicesGrid}>
						<ServiceCard
							icon={<CheckmarkCircle20Filled />}
							title="Auditoría y Certificación ISO"
							description="Ejecución de auditorías internas y externas, planes de mejora, certificación en normas ISO (9001, 14001, 27001, 45001, 21001)."
						/>

						<ServiceCard
							icon={<DocumentBulletList20Filled />}
							title="Gestión Documental y Protección de Activos de Información"
							description="Protección de integridad, disponibilidad y confidencialidad de los activos de información en consultorías y auditorías."
						/>

						<ServiceCard
							icon={<ShieldCheckmark20Filled />}
							title="Gestión de Ciberseguridad y Vulnerabilidades"
							description="Servicios de seguridad de la información: pruebas de RedTeam, auditorías de red, OWISAM, ingeniería social, instalación de SIEM, acceso seguro en la nube."
						/>

						<ServiceCard
							icon={<DataUsage20Filled />}
							title="Business Intelligence (BI) y Analítica de Datos"
							description="Modelado, validación, creación de tableros de control, capacitación y soporte."
						/>

						<ServiceCard
							icon={<LeafTwo20Filled />}
							title="Consultoría Digital Sostenible y Remota"
							description="Prestación de servicios digitales y remotos con prácticas sostenibles, minimizando impacto ambiental y reduciendo huella de carbono."
						/>
					</div>
				</section>

				{/* Value Flow */}
				<section className="container mb-5">
					<div className={classes.valueFlowSection}>
						<div className={classes.valueFlowContent}>
							<div className="mb-4">
								<Subtitle1 as="h2" block className="mb-2">
									Flujo de Valor
								</Subtitle1>
								<Text as="p" size={400}>
									Nuestro proceso está diseñado para maximizar el valor entregado a las PYMES, desde el primer contacto
									hasta el acompañamiento continuo.
								</Text>
							</div>

							<Card appearance="outline" className={classes.valueFlowCard}>
								<div className={classes.valueFlowGrid}>
									<FlowStep number={1} text="PYMES que necesitan de nuestros servicios" />
									<FlowStep number={2} text="Escuchar y entender necesidades del cliente" />
									<FlowStep number={3} text="Diagnóstico inicial para mapear necesidades" />
									<FlowStep number={4} text="Auditoría detallada: scans, pruebas y chequeos ISO/OWASP" />
									<FlowStep number={5} text="Reporte de hallazgos con riesgos identificados" />
									<FlowStep number={6} text="Plan de mejoramiento personalizado y accionable" />
									<FlowStep number={7} text="Capacitar al equipo para mantener buenas prácticas" />
									<FlowStep number={8} text="Acompañar con auditorías y soporte continuo" />
									<FlowStep number={9} text="Operaciones seguras, eficientes y certificadas para PYME" />
								</div>
							</Card>
						</div>

						<div className={classes.valueFlowImageContainer}>
							<Image src={serviceImage2} alt="Flujo de valor" className={classes.valueFlowImage} />
						</div>
					</div>
				</section>

				{/* Business Capability */}
				<section className="container mb-5">
					<div className={classes.capabilitySection}>
						<div className={classes.capabilityImageContainer}>
							<Image src={serviceImage3} alt="Capacidad de negocio" className={classes.capabilityImage} />
						</div>
						<Card appearance="filled" className={classes.capabilityCard}>
							<Subtitle2 as="h2" block className="mb-3">
								Capacidad del Negocio
							</Subtitle2>
							<Text as="p" size={400} className={classes.capabilityText}>
								"La capacidad central de ResQBit es proveer soluciones digitales integrales que combinan sostenibilidad,
								analítica de datos, certificación de calidad, protección de la información y ciberseguridad para
								impulsar la confianza y la eficiencia en las PYMES."
							</Text>
						</Card>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
	const classes = useStyles();

	return (
		<Card appearance="outline" className={classes.serviceCard}>
			<CardHeader
				header={
					<div className="d-flex align-items-center gap-2">
						<div className={classes.serviceIcon}>{icon}</div>
						<Subtitle2 as="h3" className="mb-0">
							{title}
						</Subtitle2>
					</div>
				}
			/>
			<Text as="p" size={300} className={classes.serviceDescription}>
				{description}
			</Text>
		</Card>
	);
}

interface FlowStepProps {
	number: number;
	text: string;
}

function FlowStep({ number, text }: FlowStepProps) {
	const classes = useStyles();

	return (
		<div className={classes.flowStep}>
			<div className={classes.flowStepNumber}>{number}</div>
			<Text as="p" size={400} className={classes.flowStepText}>
				{text}
			</Text>
		</div>
	);
}

const useStyles = makeStyles({
	heroWrapper: {
		background: tokens.colorNeutralBackground2,
		padding: "4rem 2rem",
		marginBottom: "3rem",
	},
	hero: {
		maxWidth: "1200px",
		margin: "0 auto",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "3rem",
		alignItems: "center",
		"@media (max-width: 992px)": {
			gridTemplateColumns: "1fr",
			gap: "2rem",
		},
	},
	heroContent: {
		textAlign: "left",
		"@media (max-width: 992px)": {
			textAlign: "center",
		},
	},
	heroSubtitle: {
		color: tokens.colorNeutralForeground2,
		marginTop: "1rem",
	},
	heroImageContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"@media (max-width: 992px)": {
			order: -1,
		},
	},
	heroImage: {
		width: "100%",
		height: "auto",
		borderRadius: tokens.borderRadiusLarge,
		boxShadow: tokens.shadow16,
		objectFit: "cover",
		maxHeight: "400px",
	},
	servicesGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
		gap: "1.5rem",
		"@media (max-width: 768px)": {
			gridTemplateColumns: "1fr",
		},
	},
	serviceCard: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		transition: "transform 0.2s ease, box-shadow 0.2s ease",
		"&:hover": {
			transform: "translateY(-4px)",
			boxShadow: tokens.shadow16,
		},
	},
	serviceIcon: {
		width: "40px",
		height: "40px",
		borderRadius: tokens.borderRadiusMedium,
		backgroundColor: tokens.colorBrandBackground,
		color: tokens.colorNeutralForegroundInverted,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "20px",
	},
	serviceDescription: {
		marginTop: "0.75rem",
		color: tokens.colorNeutralForeground2,
		lineHeight: 1.5,
		flexGrow: 1,
	},
	valueFlowCard: {
		padding: "2rem",
	},
	valueFlowSection: {
		display: "grid",
		gridTemplateColumns: "2fr 1fr",
		gap: "3rem",
		alignItems: "start",
		"@media (max-width: 992px)": {
			gridTemplateColumns: "1fr",
			gap: "2rem",
		},
	},
	valueFlowContent: {
		width: "100%",
	},
	valueFlowImageContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "start",
		"@media (max-width: 992px)": {
			order: -1,
		},
	},
	valueFlowImage: {
		width: "100%",
		height: "auto",
		borderRadius: tokens.borderRadiusLarge,
		boxShadow: tokens.shadow8,
		objectFit: "cover",
	},
	valueFlowGrid: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
	flowStep: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		gap: "1rem",
		padding: "0.75rem",
		borderRadius: tokens.borderRadiusMedium,
		transition: "background-color 0.2s ease",
		"&:hover": {
			backgroundColor: tokens.colorNeutralBackground3,
		},
	},
	flowStepNumber: {
		minWidth: "32px",
		height: "32px",
		borderRadius: "50%",
		backgroundColor: tokens.colorBrandBackground,
		color: tokens.colorNeutralForegroundInverted,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: 600,
		fontSize: "0.9rem",
		flexShrink: 0,
	},
	flowStepText: {
		color: tokens.colorNeutralForeground1,
		lineHeight: 1.5,
		flex: 1,
	},
	capabilityCard: {
		backgroundColor: tokens.colorBrandBackground,
		color: tokens.colorNeutralForegroundInverted,
		padding: "2rem",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	capabilitySection: {
		display: "grid",
		gridTemplateColumns: "1fr 2fr",
		gap: "2rem",
		alignItems: "center",
		"@media (max-width: 992px)": {
			gridTemplateColumns: "1fr",
		},
	},
	capabilityImageContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	capabilityImage: {
		width: "100%",
		height: "auto",
		borderRadius: tokens.borderRadiusLarge,
		boxShadow: tokens.shadow8,
		objectFit: "cover",
		maxHeight: "350px",
	},
	capabilityText: {
		fontSize: "1.1rem",
		lineHeight: 1.6,
		fontStyle: "italic",
		color: tokens.colorNeutralForegroundInverted,
	},
});

export default Services;
