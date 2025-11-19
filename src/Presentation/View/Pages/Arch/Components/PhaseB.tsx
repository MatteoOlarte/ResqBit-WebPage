import image from "@/assets/Arch/phaseB_img0-4x.png";
import { Caption1, Card, makeStyles, Subtitle1, Subtitle2, Text, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
	asIsCard: {
		backgroundColor: tokens.colorPaletteRedBackground2,
		padding: tokens.spacingVerticalL,
		height: "100%",
	},
	toBeCard: {
		backgroundColor: tokens.colorPaletteGreenBackground2,
		padding: tokens.spacingVerticalL,
		height: "100%",
	},
	gridContainer: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: tokens.spacingHorizontalL,
		marginBottom: tokens.spacingVerticalXXL,
		"@media (max-width: 768px)": {
			gridTemplateColumns: "1fr",
		},
	},
	imageContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: tokens.spacingVerticalXXL,
	},
	figure: {
		margin: 0,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	image: {
		aspectRatio: "19/9",
		maxWidth: "100%",
		width: "100%",
		height: "auto",
		objectFit: "cover",
		borderRadius: tokens.borderRadiusMedium,
		boxShadow: tokens.shadow8,
	},
	figcaption: {
		marginTop: tokens.spacingVerticalM,
		textAlign: "center",
		color: tokens.colorNeutralForeground2,
	},
});

function PhaseB() {
	const classes = useStyles();

	return (
		<div>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Business Architecture
				</Subtitle1>
			</div>

			<div className={classes.gridContainer}>
				<Card appearance="filled" className={classes.asIsCard}>
					<Subtitle2 as="h3" className="mb-3" block>
						As-Is
					</Subtitle2>
					<Text as="p" size={400} block>
						Actualmente, ResQBit se encuentra en una etapa de crecimiento y consolidación en el mercado de la
						consultoría tecnológica. Su modelo de negocio As-Is se caracteriza por procesos parcialmente estandarizados
						y alta dependencia del conocimiento individual de sus consultores. Los servicios se enfocan en tres áreas
						principales: auditorías ISO, ciberseguridad y Business Intelligence, dirigidos principalmente a pequeñas y
						medianas empresas (PYMES). Las operaciones se ejecutan tanto de forma presencial como remota, utilizando
						herramientas como Microsoft 365, Teams, SharePoint, OpenVAS/Nessus, Power BI y Helisa, entre otras. Aunque
						la empresa ha demostrado flexibilidad y un enfoque orientado al cliente, aún carece de procesos totalmente
						integrados, indicadores de desempeño estructurados y una plataforma unificada para la gestión de proyectos y
						relaciones con clientes. La empresa evidencia fortalezas en su capacidad técnica, la especialización de su
						equipo y su enfoque en la personalización de servicios. Sin embargo, también presenta brechas en la
						documentación de procesos, la gestión del conocimiento organizacional y la automatización de tareas
						críticas. La comunicación interna y el seguimiento de proyectos dependen de herramientas diversas sin una
						integración total, lo que limita la trazabilidad y la eficiencia operativa. Además, la falta de un sistema
						CRM formal dificulta el seguimiento sistemático de clientes y oportunidades comerciales.
					</Text>
				</Card>

				<Card appearance="filled" className={classes.toBeCard}>
					<Subtitle2 as="h3" className="mb-3" block>
						To-Be
					</Subtitle2>
					<Text as="p" size={400} block>
						ResQBit plantea la construcción de un modelo organizacional integrado, digital y escalable, que fortalezca
						la eficiencia operativa, la calidad de los servicios y la experiencia del cliente. En el estado futuro
						deseado, los procesos estarán completamente estandarizados y automatizados, soportados por herramientas
						tecnológicas interconectadas que permitan la trazabilidad total de la información y una visión global del
						desempeño organizacional. Se implementará un sistema CRM para centralizar la gestión de clientes y un
						sistema de control de proyectos mediante plataformas como SalesForce, integradas con Power BI para el
						monitoreo de indicadores en tiempo real. ResQBit evolucionará hacia una cultura organizacional colaborativa,
						basada en la mejora continua, la innovación y la toma de decisiones guiada por datos. La relación con los
						clientes será más proactiva, enfocada en la construcción de relaciones de largo plazo mediante una
						comunicación continua y el seguimiento automatizado de sus necesidades. Asimismo, los servicios se
						estructurarán bajo un esquema modular que combine auditorías, consultorías y acompañamiento permanente,
						permitiendo a la empresa ampliar su portafolio sin perder eficiencia ni calidad.
					</Text>
				</Card>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Capacidades empresariales e indicadores
				</Subtitle2>
				<Text as="p" size={400} className="mb-4" block>
					Se identifica la necesidad de desarrollar competencias que permitan alcanzar el estado deseado. Entre ellas
					destacan la gestión integrada de clientes, la gestión centralizada de auditorías, la automatización de
					procesos, la analítica de datos para la toma de decisiones, la gestión del conocimiento organizacional, la
					madurez en ciberseguridad y la gestión ambiental digital. Para lograrlo, ResQBit deberá adoptar herramientas
					tecnológicas de integración, como Power Automate, Dynamics 365, Salesforce, Wazuh/Splunk y Microsoft Azure,
					que servirán como base para interconectar sus operaciones.
				</Text>

				<div className={classes.imageContainer}>
					<figure className={classes.figure}>
						<img src={image} alt="Capacidades empresariales e indicadores" className={classes.image} />
						<figcaption className={classes.figcaption}>
							<Caption1>Figura 1. Capacidades empresariales e indicadores clave de ResQBit</Caption1>
						</figcaption>
					</figure>
				</div>

				<Text as="p" size={400} block>
					Los indicadores clave (KPIs) que medirán el avance de la empresa hacia su modelo To-Be incluyen el índice de
					satisfacción del cliente (NPS ≥ 90%), la reducción del tiempo promedio de ejecución de auditorías en un 25%,
					el crecimiento del 30% anual en la base de clientes, la automatización del 60% de los procesos internos, el
					cumplimiento total de normativas ISO sin no conformidades mayores y la reducción del 20% en la huella digital
					corporativa. Estos indicadores permitirán evaluar la efectividad de la arquitectura de negocio y su
					contribución al logro de los objetivos estratégicos planteados.
				</Text>
			</div>
		</div>
	);
}

export default PhaseB;
