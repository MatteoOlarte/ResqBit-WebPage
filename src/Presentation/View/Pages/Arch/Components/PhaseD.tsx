import {
	Body1Strong,
	Subtitle1,
	Subtitle2,
	Table,
	TableBody,
	TableCell,
	TableCellLayout,
	TableHeader,
	TableHeaderCell,
	TableRow,
	Text,
	makeStyles,
	tokens,
} from "@fluentui/react-components";
import image from "@/assets/Arch/Picture1.png";

const architecturePrinciples = [
	{
		title: "Computación en la Nube como Plataforma Base",
		description:
			"Los servicios se ejecutan preferentemente en ambientes cloud, evitando infraestructura física local y permitiendo escalabilidad bajo demanda.",
	},
	{
		title: "Seguridad por Diseño",
		description:
			"Todo componente tecnológico se configura con controles de seguridad desde su origen (MFA, roles mínimos, cifrado en tránsito y reposo).",
	},
	{
		title: "Disponibilidad y Resiliencia Operacional",
		description:
			"Las aplicaciones críticas y los repositorios de información cuentan con respaldo, monitoreo y capacidad de recuperación ante incidentes.",
	},
	{
		title: "Interoperabilidad y Conectividad Estándar",
		description:
			"La arquitectura favorece integraciones mediante APIs, iPaaS y protocolos seguros, evitando dependencias rígidas o silos de información.",
	},
];

const technologicalComponents = [
	{
		component: "Plataforma Cloud",
		technology: "Microsoft Azure / AWS / Google Cloud",
		function: "Ejecución de servicios, bases de datos, almacenamiento y autenticación.",
	},
	{
		component: "Gestión de Identidad y Acceso",
		technology: "Microsoft Entra ID (Azure AD) / Okta",
		function: "Autenticación, autorización, MFA y SSO para todas las aplicaciones.",
	},
	{
		component: "Gestión Documental",
		technology: "SharePoint Online + OneDrive",
		function: "Repositorio central, versionado, permisos y trazabilidad documental.",
	},
	{
		component: "Analítica y Datos",
		technology: "Azure SQL, Azure Blob / Dataflows, Power BI",
		function: "Almacenamiento estructurado, transformación y visualización.",
	},
	{
		component: "Seguridad y Monitoreo",
		technology: "Wazuh / Splunk (SIEM), OpenVAS / Nessus",
		function: "Detección de vulnerabilidades, correlación de eventos y respuesta a incidentes.",
	},
	{
		component: "Integración y Automatización",
		technology: "Power Automate / n8n",
		function: "Orquestación de flujos entre CRM, Jira, SharePoint, BI y SIEM.",
	},
	{
		component: "Colaboración y Operación",
		technology: "Microsoft Teams + Jira/Planner",
		function: "Coordinación, seguimiento de tareas, reuniones y comunicación.",
	},
];

const consolidatedCapabilities = [
	"Infraestructura basada en nube con herramientas estables (Microsoft 365, Azure, Power BI).",
	"Gestión documental centralizada en SharePoint, lo que permite control de versiones, trazabilidad y resguardo de evidencias.",
	"Modelos y tableros analíticos operativos en Power BI que soportan decisiones y seguimiento de resultados.",
	"Monitoreo y análisis de seguridad a través de herramientas SIEM y escáneres de vulnerabilidades, lo que permite detectar incidentes y soportar planes de respuesta.",
];

const areasToStrengthen = [
	"La integración entre CRM, Jira, SharePoint y Power BI se realiza parcialmente, con ciertos pasos manuales que incrementan tiempos y riesgo de reproceso.",
	"La automatización de flujos de información todavía no es sistemática, especialmente en la consolidación de datos para reportes y análisis comparativos.",
	"La gestión de roles y niveles de acceso requiere formalización como política corporativa documentada, para asegurar consistencia en todos los servicios.",
	"El monitoreo y la reacción a incidentes dependen del criterio operativo, y se requiere formalizar el procedimiento de respuesta coordinada.",
];

const evolutionAreas = [
	"Mayor orquestación automática entre sistemas.",
	"Reducción de manipulación manual de datos y reportes.",
	"Fortalecimiento del modelo de seguridad por diseño.",
	"Documentación y adopción consistente de estándares de operación tecnológica.",
];

const roadmapData = [
	{
		phase: "Corto Plazo (0–6 meses)",
		action: "Formalización de repositorios y permisos",
		result: "Trazabilidad completa y seguridad por rol",
	},
	{
		phase: "Mediano Plazo (6–12 meses)",
		action: "Integración CRM ↔ Jira ↔ Power BI",
		result: "Eliminación de reprocesos e informes manuales",
	},
	{
		phase: "Largo Plazo (12–24 meses)",
		action: "Automatización de auditorías y dashboards en tiempo real",
		result: "Operación escalable sin aumentar carga de trabajo",
	},
];

function PhaseD() {
	const classes = useStyles();

	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Technology Architecture
				</Subtitle1>

				{/* Principios de Arquitectura Tecnológica */}
				<Subtitle2 className="mb-2" block>
					Principios de Arquitectura Tecnológica
				</Subtitle2>

				<ol className="mb-4">
					{architecturePrinciples.map((item, index) => (
						<li key={index} className="mb-2">
							<Body1Strong>{item.title}: </Body1Strong>
							<Text as="span" size={400}>
								{item.description}
							</Text>
						</li>
					))}
				</ol>
			</div>

			{/* Componentes Tecnológicos Principales */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Componentes Tecnológicos Principales
				</Subtitle2>

				<div className="table-responsive">
					<Table size="small" aria-label="Componentes Tecnológicos">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Componente</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Tecnología / Herramienta</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Función</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{technologicalComponents.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.component}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.technology}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.function}</TableCellLayout>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			{/* Modelo de Conectividad */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Modelo de Conectividad
				</Subtitle2>

				<div className={classes.imageContainer}>
					<img
						src={image}
						alt="Modelo de Conectividad"
						className={classes.image}
					/>
				</div>
			</div>

			{/* Seguridad continua y operacional */}
			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Seguridad Continua y Operacional
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La seguridad y la continuidad operativa de la arquitectura tecnológica se aseguran mediante un conjunto de
					prácticas integradas. En primer lugar, la <strong>gestión de identidad</strong> se establece con autenticación
					multifactor (MFA) como requisito obligatorio, lo que garantiza que el acceso a los sistemas esté protegido y
					vinculado a la identidad real del usuario. Sobre esta base, los roles y permisos se configuran bajo el
					principio de <strong>mínimo privilegio</strong>, de manera que cada usuario solo accede a la información y
					funciones que requiere para sus actividades, evitando exposición innecesaria de activos y reduciendo el riesgo
					de accesos indebidos.
				</Text>

				<Text as="p" size={400} className="mb-3" block>
					La <strong>protección de la información</strong> se implementa mediante cifrado tanto en tránsito, utilizando
					protocolos seguros como HTTPS/TLS, como en reposo, a través de mecanismos de cifrado a nivel de almacenamiento
					y bases de datos. Asimismo, la organización cuenta con <strong>copias de respaldo automatizadas</strong>,
					aplicadas de forma periódica y con políticas de retención definidas, lo que permite restaurar la operación en
					caso de pérdida, daño o contingencia.
				</Text>

				<Text as="p" size={400} className="mb-4" block>
					En cuanto a la <strong>respuesta a incidentes</strong>, se establece un procedimiento estructurado que abarca
					las fases de detección, análisis, contención, corrección y reporte al cliente. Este proceso se soporta
					mediante el uso de una consola SIEM que centraliza eventos de seguridad y permite correlacionar alertas, junto
					con la ejecución de planes de acción correctiva previamente definidos. De esta forma, la organización asegura
					no solo la protección de la información, sino también la capacidad de continuar sus operaciones de manera
					confiable y sostenible.
				</Text>
			</div>

			{/* Nivel de Madurez Tecnológica */}
			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Nivel de Madurez Tecnológica
				</Subtitle2>

				<Text as="p" size={400} className="mb-4" block>
					Actualmente, ResQBit se encuentra en una fase de <strong>consolidación inicial (Nivel M1)</strong> respecto a
					su arquitectura tecnológica. Esto significa que la organización ya dispone de las herramientas clave para
					operar digitalmente, pero aún requiere estandarizar la integración entre ellas y fortalecer la automatización
					de los flujos internos.
				</Text>

				<Subtitle2 className="mb-2" block>
					Capacidades ya Consolidadas
				</Subtitle2>

				<ul className="mb-3">
					{consolidatedCapabilities.map((item, index) => (
						<li key={index} className="mb-2">
							<Text as="span" size={400}>
								{item}
							</Text>
						</li>
					))}
				</ul>

				<Text as="p" size={400} className="mb-4" block>
					Estas capacidades permiten operar de forma digital, remota y auditable, alineada al modelo de consultoría de
					la organización.
				</Text>

				<Subtitle2 className="mb-2" block>
					Áreas de Madurez por Fortalecer
				</Subtitle2>

				<Text as="p" size={400} className="mb-2" block>
					Sin embargo, el ecosistema tecnológico aún presenta áreas de madurez por fortalecer:
				</Text>

				<ul className="mb-4">
					{areasToStrengthen.map((item, index) => (
						<li key={index} className="mb-2">
							<Text as="span" size={400}>
								{item}
							</Text>
						</li>
					))}
				</ul>

				<Subtitle2 className="mb-2" block>
					Conclusión del Nivel
				</Subtitle2>

				<Text as="p" size={400} className="mb-2" block>
					Por tanto, el nivel de madurez tecnológica actual se caracteriza por una plataforma estable y funcional, pero
					en transición hacia una operación integrada y escalable.
				</Text>

				<Text as="p" size={400} className="mb-2" block>
					La evolución hacia niveles superiores implicará:
				</Text>

				<ul className="mb-4">
					{evolutionAreas.map((item, index) => (
						<li key={index} className="mb-2">
							<Text as="span" size={400}>
								{item}
							</Text>
						</li>
					))}
				</ul>
			</div>

			{/* Hoja de Ruta Tecnológica */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Hoja de Ruta Tecnológica
				</Subtitle2>

				<div className="table-responsive">
					<Table size="small" aria-label="Hoja de Ruta Tecnológica">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Fase</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Acción Prioritaria</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Resultado Esperado</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{roadmapData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.phase}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.action}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.result}</TableCellLayout>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</>
	);
}

const useStyles = makeStyles({
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "24px",
	},
	image: {
		width: "100%",
		maxWidth: "600px",
		height: "auto",
		aspectRatio: "1 / 1",
		objectFit: "cover",
		borderRadius: tokens.borderRadiusMedium,
		boxShadow: tokens.shadow8,
	},
});

export default PhaseD;
