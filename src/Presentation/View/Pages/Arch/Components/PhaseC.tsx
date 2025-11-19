import {
	Body1Strong,
	Card,
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

				<Text as="p" size={400} className="mb-4" block>
					ResQBit cuenta con una base tecnológica funcional pero fragmentada. El entorno As-Is se caracteriza por el uso
					de múltiples herramientas que operan de manera independiente, como Microsoft 365 (Teams, SharePoint, Outlook)
					para la colaboración interna, Power BI para el análisis de datos, OpenVAS/Nessus para la detección de
					vulnerabilidades, Helisa para la gestión contable y Jira para el seguimiento de proyectos. Si bien estas
					aplicaciones permiten realizar las actividades esenciales del negocio, la falta de una integración completa
					entre ellas genera redundancia de información, dificultades de trazabilidad y procesos manuales que afectan la
					eficiencia operativa. vos estratégicos planteados.
				</Text>

				{/* Arquitectura de Aplicaciones Table */}
				<div className="table-responsive mb-4">
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

			{/* Panorama Actual */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Panorama Actual
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					ResQBit cuenta con una base tecnológica funcional pero fragmentada. Actualmente, la compañía opera con
					múltiples herramientas independientes:
				</Text>

				<ul className="mb-3">
					<li className="mb-2">
						<Text as="span" size={400}>
							Microsoft 365 (Teams, SharePoint, Outlook) para la colaboración interna.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Power BI para el análisis de datos.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							OpenVAS/Nessus para la detección de vulnerabilidades.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Helisa para la gestión contable.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Jira para el seguimiento de proyectos.
						</Text>
					</li>
				</ul>

				<Text as="p" size={400} className="mb-4" block>
					Aunque estas aplicaciones permiten cumplir con las actividades esenciales, la falta de integración entre ellas
					genera redundancia de información, baja trazabilidad y procesos manuales que reducen la eficiencia operativa.
				</Text>
			</div>

			{/* Arquitectura Futura */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Arquitectura Futura
				</Subtitle2>

				<Text as="p" size={400} className="mb-4" block>
					La evolución tecnológica de ResQBit contempla la integración progresiva de sistemas y automatización de
					procesos mediante herramientas como Wazuh o Splunk para la gestión de incidentes y monitoreo continuo.
					<br />
					<br />
					Las auditorías técnicas continuarán realizándose con OpenVAS/Nessus, ahora enlazadas con Power BI para generar
					reportes automatizados.
					<br />
					<br />
					El dominio financiero y administrativo se soportará en Helisa o Zoho Books, complementado con la gestión de
					talento humano en Factorial o Zoho People, sincronizados mediante automatizaciones que garanticen coherencia
					de datos entre finanzas, proyectos y personal.
				</Text>
			</div>

			{/* Arquitectura de Datos Centralizada */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Arquitectura de Datos Centralizada
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La Arquitectura de Datos se concibe como el núcleo del sistema de información de ResQBit.
					<br />
					<br />
					Su estructura To-Be estará conformada por un Data Warehouse alojado en Microsoft Azure, donde convergerá la
					información de auditorías, proyectos, clientes, finanzas y seguridad.
					<br />
					<br />
					Los procesos de integración (ETL/ELT) se realizarán mediante Power Query, Azure Data Factory o dbt, asegurando
					calidad, coherencia y trazabilidad de los datos.
					<br />
					<br />
					Desde esta base se generarán modelos analíticos dinámicos en Power BI, que permitirán monitorear indicadores
					clave (KPIs) como:
				</Text>

				<ul className="mb-4">
					<li className="mb-2">
						<Text as="span" size={400}>
							Satisfacción del cliente
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Tiempos de ejecución
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Nivel de automatización
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Cumplimiento normativo ISO
						</Text>
					</li>
				</ul>
			</div>

			{/* Seguridad y Cumplimiento */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Seguridad y Cumplimiento
				</Subtitle2>

				<Card appearance="filled" className="mb-3 text-center">
					<Text as="p" size={400} className="mb-0">
						La arquitectura futura contemplará medidas avanzadas para garantizar la confidencialidad, integridad y
						disponibilidad de la información.
					</Text>
				</Card>

				<ul className="mb-4">
					<li className="mb-2">
						<Text as="span" size={400}>
							Autenticación multifactor (MFA)
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Encriptación de datos en tránsito y en reposo
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Copias de respaldo automáticas en la nube
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Controles de acceso basados en roles (RBAC)
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Auditorías periódicas alineadas con ISO 27001
						</Text>
					</li>
				</ul>
			</div>

			{/* Interoperabilidad de Aplicaciones */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Interoperabilidad de Aplicaciones
				</Subtitle2>

				<Text as="p" size={400} className="mb-4" block>
					La integración entre sistemas será un pilar estratégico.
					<br />
					<br />A través de conectores y servicios web, se enlazarán los flujos de trabajo entre CRM, Jira, SharePoint y
					Power BI, eliminando duplicidades y automatizando tareas repetitivas para lograr una operación más ágil y
					coordinada.
				</Text>
			</div>

			{/* Gobernanza de Datos */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Gobernanza de Datos
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					ResQBit implementará políticas de gobernanza y calidad de datos que aseguren la trazabilidad y cumplimiento
					normativo.
				</Text>

				<Text as="p" size={400} className="mb-3" block>
					Entre las principales acciones se incluyen:
				</Text>

				<ul className="mb-4">
					<li className="mb-2">
						<Text as="span" size={400}>
							Creación de un Catálogo de Datos Empresarial con documentación sobre fuentes, propietarios y ciclos de
							vida.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Definición de métricas de calidad que evalúen la completitud, precisión y consistencia de la información.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							Establecimiento de protocolos de actualización, almacenamiento y eliminación de datos para mantener una
							base confiable y alineada con los estándares internacionales.
						</Text>
					</li>
				</ul>
			</div>
		</>
	);
}

export default PhaseC;
