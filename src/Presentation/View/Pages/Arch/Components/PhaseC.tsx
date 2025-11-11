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
} from "@fluentui/react-components";

const informationTypes = [
	{
		title: "Información Operativa del Cliente",
		description: "Documentos corporativos, organigramas, procesos internos, políticas y métricas clave.",
	},
	{
		title: "Información de Auditoría y Seguridad",
		description:
			"Evidencias recopiladas durante auditorías, reportes de vulnerabilidades, resultados de escaneos, incidentes y planes de acción correctiva.",
	},
	{
		title: "Información Analítica",
		description: "Bases de datos modeladas, indicadores de desempeño, tableros dinámicos y reportes gerenciales.",
	},
	{
		title: "Información Interna de Gestión Administrativa",
		description:
			"Contratos, acuerdos de confidencialidad, registros financieros, documentación de proyectos y actas de seguimiento.",
	},
];

const dataManagementPrinciples = [
	{
		title: "Confidencialidad",
		description: "El acceso a la información se establece según roles y niveles de intervención.",
	},
	{
		title: "Integridad",
		description: "Toda información utilizada se verifica y versiona, evitando duplicidades e inconsistencias.",
	},
	{
		title: "Disponibilidad",
		description: "Los datos se almacenan en repositorios centralizados, con respaldo y recuperación asegurada.",
	},
	{
		title: "Trazabilidad",
		description: "Cada documento cuenta con control de versiones y registro de modificaciones.",
	},
];

const repositories = [
	{
		title: "SharePoint (Microsoft 365)",
		description: "Repositorio maestro de documentos, hallazgos, políticas y evidencias.",
	},
	{
		title: "GitHub Privado",
		description: "Gestión de versiones, configuraciones y elementos técnicos.",
	},
	{
		title: "Azure SQL / Dataflows",
		description: "Almacenamiento estructurado para análisis y modelamiento de datos.",
	},
	{
		title: "Power BI",
		description: "Plataforma para visualización y construcción de reportes gerenciales y operativos.",
	},
	{
		title: "SIEM (Wazuh / Splunk) + OpenVAS",
		description: "Almacenamiento y monitoreo de eventos y vulnerabilidades de seguridad.",
	},
];

const applicationsData = [
	{
		domain: "Gestión Documental",
		tool: "SharePoint",
		role: "Control de versiones, repositorio central, permisos por rol.",
	},
	{
		domain: "Gestión de Proyectos",
		tool: "Jira / Planner",
		role: "Seguimiento de tareas, hitos, estado y responsables.",
	},
	{
		domain: "Colaboración",
		tool: "Microsoft Teams",
		role: "Comunicación interna y coordinación operativa.",
	},
	{
		domain: "Analítica de Datos",
		tool: "Power BI + Azure SQL/Blob",
		role: "Modelamiento, tableros ejecutivos y reportes en tiempo real.",
	},
	{
		domain: "Seguridad y Vulnerabilidades",
		tool: "SIEM (Wazuh/Splunk) + OpenVAS/Nessus",
		role: "Monitoreo, correlación de eventos e identificación de riesgos.",
	},
	{
		domain: "Gestión Comercial",
		tool: "CRM (Salesforce / Clever CRM)",
		role: "Administración de clientes, oportunidades y contratos.",
	},
	{
		domain: "Automatización e Integración",
		tool: "Power Automate / n8n",
		role: "Orquestación de flujos, intercambio de datos y reducción de reprocesos.",
	},
];

function PhaseC() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Information Systems Architecture
				</Subtitle1>

				{/* Tipos de Información Administrada */}
				<Subtitle2 className="mb-2" block>
					Tipos de Información Administrada
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					ResQBit gestiona información agrupada en cuatro dominios principales:
				</Text>

				<ol className="mb-4">
					{informationTypes.map((item, index) => (
						<li key={index} className="mb-2">
							<Body1Strong>{item.title}: </Body1Strong>
							<Text as="span" size={400}>
								{item.description}
							</Text>
						</li>
					))}
				</ol>
			</div>

			{/* Principios de Gestión de Datos */}
			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Principios de Gestión de Datos
				</Subtitle2>

				<ol className="mb-3">
					{dataManagementPrinciples.map((item, index) => (
						<li key={index} className="mb-2">
							<Body1Strong>{item.title}: </Body1Strong>
							<Text as="span" size={400}>
								{item.description}
							</Text>
						</li>
					))}
				</ol>
			</div>

			{/* Repositorios y Almacenamiento */}
			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Repositorios y Almacenamiento
				</Subtitle2>

				<ol className="mb-3">
					{repositories.map((item, index) => (
						<li key={index} className="mb-2">
							<Body1Strong>{item.title}: </Body1Strong>
							<Text as="span" size={400}>
								{item.description}
							</Text>
						</li>
					))}
				</ol>

				<Text as="p" size={400} className="mb-4" block>
					En este modelo, la información no se almacena localmente en equipos individuales, sino que se gestiona desde
					repositorios centralizados, garantizando control, respaldo y continuidad.
				</Text>
			</div>

			{/* Arquitectura de Aplicaciones */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Arquitectura de Aplicaciones
				</Subtitle2>

				<div className="table-responsive">
					<Table size="small" aria-label="Arquitectura de Aplicaciones">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Dominio</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Herramienta</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Rol en la operación</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{applicationsData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.domain}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.tool}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.role}</TableCellLayout>
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

export default PhaseC;
