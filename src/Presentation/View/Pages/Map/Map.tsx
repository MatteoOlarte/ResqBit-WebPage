import backgroundImage from "@/assets/SIG/MapBG.jpg";
import { Popover, PopoverSurface, PopoverTrigger, Text, Title1, makeStyles, tokens } from "@fluentui/react-components";
import SvgIcon from "@Presentation/View/Components/SVGIcon/SVGIcon";

function Map() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<Title1 as="h1">Mapa de Procesos</Title1>
				<SvgIcon appearance="tertiary" width={40} height={40} />
			</header>

			<main className={classes.main}>
				<section className={classes.canvas}>
					<aside className={classes.rail} aria-label="Procesos Estratégicos">
						<Text as="span" size={200} className={classes.railText}>
							PROCESOS ESTRATÉGICOS
						</Text>
					</aside>

					<div>
						<div className={classes.mapArea}>
							<Node title="Planificación Estratégica" className={classes.node}>
								<ul>
									<li>Análisis DOFA (Contexto de la organización).</li>
									<li>Definición de objetivos de calidad, medio ambiente y SST.</li>
									<li>Establecimiento de políticas corporativas.</li>
								</ul>
							</Node>
							<Node title="Gestión de Riesgos y Oportunidades" className={classes.node}>
								<ul>
									<li>Identificación de amenazas y oportunidades.</li>
									<li>Evaluación de cambios normativos y tecnológicos.</li>
								</ul>
							</Node>
							<Node title="Gestión de Partes Interesadas" className={classes.node}>
								<ul>
									<li>Identificación y análisis de necesidades.</li>
									<li>Comunicación y reporte a clientes, reguladores y socios.</li>
								</ul>
							</Node>

							<Node title="Revisión por la Dirección" className={classes.node}>
								<ul>
									<li>Evaluación del desempeño del SIG.</li>
									<li>Toma de decisiones correctivas y de mejora.</li>
								</ul>
							</Node>
							<Node title="." className="invisible">
								<br />
							</Node>
							<Node title="Auditoría y Diagnóstico" className={classes.node}>
								<ul>
									<li>Auditorías internas y externas (ISO 9001, 14001, 27001, 45001).</li>
									<li>Evaluación de vulnerabilidades (OpenVAS, Nessus).</li>
									<li>Pruebas de RedTeam, OWISAM e ingeniería social.</li>
								</ul>
							</Node>

							<Node title="Consultoría y Asesoría" className={classes.node}>
								<ul>
									<li>Implementación de sistemas de gestión.</li>
									<li>Planes de mejora continua.</li>
									<li>Transformación digital y cumplimiento normativo.</li>
								</ul>
							</Node>
							<Node title="Desarrollo de Soluciones BI" className={classes.node}>
								<ul>
									<li>Modelado y validación de datos.</li>
									<li>Creación de tableros en Power BI.</li>
									<li>Capacitación y soporte post-implementación.</li>
								</ul>
							</Node>
							<Node title="Certificación ISO">
								<ul>
									<li>Preparación para auditorías externas.</li>
									<li>Seguimiento de no conformidades.</li>
									<li>Emisión de reportes ejecutivos.</li>
								</ul>
							</Node>
						</div>
					</div>

					<aside className={classes.rail} aria-label="Satisfacción del Usuario">
						<Text as="span" size={200} className={classes.railText}>
							PROCESOS MISIONALES (CLAVE)
						</Text>
					</aside>
				</section>
			</main>

			<section className="px-3">
				<aside className={classes.rail} aria-label="Satisfacción del Usuario">
					<Text as="span" size={200} className={classes.railTextH}>
						Procesos de Apoyo
					</Text>
				</aside>
				<div className={classes.supportBar} aria-label="Procesos de Soporte">
					<Pill title="Gestión de Recursos Humanos">
						<ul>
							<li>Reclutamiento y selección.</li>
							<li>Capacitación en normas ISO, seguridad y herramientas digitales.</li>
							<li>Evaluación del desempeño y bienestar laboral.</li>
						</ul>
					</Pill>

					<Pill title="Gestión de Infraestructura y Tecnología">
						<ul>
							<li>Administración de plataformas en la nube (Azure/AWS).</li>
							<li>Mantenimiento de equipos y software.</li>
							<li>Soporte técnico y gestión de incidentes TI.</li>
						</ul>
					</Pill>

					<Pill title="Gestión Documental">
						<ul>
							<li>Control de documentos y registros (SharePoint/Github).</li>
							<li>Versiones y cifrado de informes.</li>
							<li>Respaldo y recuperación de información.</li>
						</ul>
					</Pill>

					<Pill title="Gestión Comercial y Marketing">
						<ul>
							<li>Prospección y fidelización de clientes.</li>
							<li>Estrategias de marketing digital (redes sociales, ads).</li>
							<li>Alianzas estratégicas y networking.</li>
						</ul>
					</Pill>

					<Pill title="Gestión Financiera y Administrativa">
						<ul>
							<li>Contabilidad y facturación (Helisa).</li>
							<li>Presupuestos y control de gastos.</li>
							<li>Gestión de proveedores y contratos.</li>
						</ul>
					</Pill>

					<Pill title="Gestión de la Seguridad de la Información">
						<ul>
							<li>Protección de activos de información.</li>
							<li>Políticas de acceso y cifrado.</li>
							<li>Auditorías internas de ciberseguridad.</li>
						</ul>
					</Pill>

					<Pill title="Gestión Ambiental y Sostenibilidad">
						<ul>
							<li>Reducción de huella de carbono.</li>
							<li>Digitalización de procesos.</li>
							<li>Selección de proveedores con criterios ambientales.</li>
						</ul>
					</Pill>
				</div>
			</section>
		</div>
	);
}

function Node({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
	const classes = useStyles();
	return (
		<Popover withArrow>
			<PopoverTrigger>
				<div className={`${classes.node} ${className}`}>
					<Text as="span" size={500} className="text-center">
						{title}
					</Text>
				</div>
			</PopoverTrigger>

			<PopoverSurface>
				<div>
					<Text as="h3" size={300} weight="semibold" className="mb-3" block>
						{title}
					</Text>

					{children}
				</div>
			</PopoverSurface>
		</Popover>
	);
}

function Pill({ title, children }: { title: string; children: React.ReactNode; className?: string }) {
	const classes = useStyles();
	return (
		<Popover withArrow>
			<PopoverTrigger>
				<div className={classes.supportPill}>
					<Text as="span" size={200}>
						{title}
					</Text>
				</div>
			</PopoverTrigger>

			<PopoverSurface>
				<div>
					<Text as="h3" size={300} weight="semibold" className="mb-3" block>
						{title}
					</Text>

					{children}
				</div>
			</PopoverSurface>
		</Popover>
	);
}

const useStyles = makeStyles({
	root: {
		display: "grid",
		gridTemplateRows: "auto 1fr",
		minHeight: "100vh",
		backgroundColor: tokens.colorNeutralBackground1,
	},
	header: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		alignItems: "center",
		backgroundColor: tokens.colorBrandBackground,
		color: tokens.colorNeutralForegroundInverted,
		borderRadius: tokens.borderRadiusMedium,
		padding: "0.5rem",
		margin: "1rem",
	},
	logoSlot: {
		width: "120px",
		height: "48px",
		border: `2px dashed ${tokens.colorNeutralStrokeOnBrand2}`,
		borderRadius: tokens.borderRadiusMedium,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: tokens.colorNeutralForegroundInverted,
		fontSize: tokens.fontSizeBase200,
	},
	main: {
		padding: "1.25rem",
	},
	canvas: {
		display: "grid",
		gridTemplateColumns: "minmax(48px, 72px) 1fr minmax(48px, 72px)",
		gap: "1rem",
	},
	rail: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: tokens.colorBrandBackground,
		color: tokens.colorNeutralForegroundInverted,
		borderRadius: tokens.borderRadiusMedium,
		padding: "0.5rem",
	},
	railText: {
		writingMode: "vertical-rl",
		transform: "rotate(180deg)",
		letterSpacing: "0.08em",
		fontWeight: 600,
	},
	railTextH: {
		letterSpacing: "0.08em",
		fontWeight: 600,
	},
	mapArea: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gridTemplateRows: "repeat(3, minmax(120px, 1fr))",
		gap: "1rem",
		alignItems: "center",
		justifyItems: "center",
		backgroundColor: tokens.colorNeutralBackground2,
		borderRadius: tokens.borderRadiusLarge,
		padding: "4rem 1rem",
		boxShadow: tokens.shadow4,
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
	},
	node: {
		width: "clamp(96px, 12vw, 160px)",
		height: "clamp(96px, 12vw, 160px)",
		borderRadius: "50%",
		backgroundColor: `color-mix(in srgb, ${tokens.colorNeutralBackground2}, transparent 80%)`,
		borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
		color: "black",
		boxShadow: tokens.shadow2Brand,
		backdropFilter: "saturate(180%) blur(20px)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		padding: "0.75rem",
		cursor: "pointer",
		"&:hover": {
			boxShadow: `${tokens.colorBrandBackground} 0px 0px 8px 0px`,
		},
	},
	nodeText: {
		textAlign: "center",
	},
	supportBar: {
		marginTop: "1rem",
		backgroundColor: tokens.colorNeutralBackground2,
		borderRadius: tokens.borderRadiusLarge,
		padding: "0.75rem",
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
		gap: "0.75rem",
	},
	supportPill: {
		backgroundColor: tokens.colorBrandBackground,
		color: tokens.colorNeutralForegroundInverted,
		borderRadius: tokens.borderRadiusCircular,
		padding: "0.5rem 0.75rem",
		textAlign: "center",
		border: `2px solid ${tokens.colorBrandStroke2}`,
	},
	infoSlot: {
		marginTop: "1rem",
		border: `2px dashed ${tokens.colorNeutralStroke1}`,
		borderRadius: tokens.borderRadiusMedium,
		padding: "0.75rem",
		minHeight: "80px",
		color: tokens.colorNeutralForeground1,
	},
});

export default Map;
