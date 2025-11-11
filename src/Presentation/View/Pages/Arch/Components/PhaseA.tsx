import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";
import {
	Body1,
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

const focuses: KeyActivityItemType[] = [
	{
		title: "Transformar el caos en calma",
		desc: ["Mediante una arquitectura centrada en la automatización, la seguridad y la analítica de datos."],
	},
	{
		title: "Ofrecer una experiencia digital fluida",
		desc: ["Donde clientes y auditores trabajen dentro de un entorno seguro, colaborativo y accesible desde la nube."],
	},
	{
		title: "Integrar los pilares tecnológicos",
		desc: [
			"(CRM, BI, SIEM, automatización y gestión documental) bajo una visión omnicanal con identidad única y control de accesos unificado (SSO y MFA).",
		],
	},
];

const stakeholdersData = [
	{
		stakeholder: "Dirección General (CEO/Gerencia)",
		role: "Alineación estratégica, ROI, crecimiento del negocio.",
		concerns: "Costos, tiempo de implementación, ventaja competitiva.",
		influence: "Alta",
	},
	{
		stakeholder: "Director de Tecnología (CTO)",
		role: "Viabilidad técnica, seguridad, escalabilidad, estandarización.",
		concerns: "Complejidad de la integración, deuda técnica, cumplimiento del SIEM y MFA.",
		influence: "Alta",
	},
	{
		stakeholder: "Clientes (PYMEs)",
		role: "Facilidad de uso, procesos simples, confianza y transparencia.",
		concerns: "Seguridad de sus datos, costos del servicio, simplicidad en la auditoría.",
		influence: "Alta",
	},
	{
		stakeholder: "Auditores (Internos/Externos)",
		role: "Cumplimiento regulatorio, trazabilidad, acceso a la información.",
		concerns: "Integridad de los datos, cumplimiento de normativas (ISO), acceso seguro (SSO).",
		influence: "Media",
	},
	{
		stakeholder: "Equipo de Ciberseguridad",
		role: "Seguridad de la plataforma, gestión de identidades (SSO/MFA).",
		concerns: "Riesgos de brechas, control de accesos, integración del SIEM.",
		influence: "Alta",
	},
	{
		stakeholder: "Equipo de Desarrollo / TI",
		role: "Claridad en los requerimientos, mantenibilidad, automatización.",
		concerns: "Complejidad del desarrollo, guías de arquitectura claras.",
		influence: "Media",
	},
];

const inScopeItems: KeyActivityItemType[] = [
	{
		title: "Procesos de Negocio",
		desc: [
			"Gestión de Auditorías (basadas en ISO).",
			"Procesos de Inteligencia de Negocio (BI) para PYMEs.",
			"Gestión de Ciberseguridad (Monitoreo y Respuesta).",
			"Gestión de Relación con Clientes (CRM).",
			"Gestión Documental.",
		],
		listType: "ul",
	},
	{
		title: "Unidades Organizacionales",
		desc: [
			"Equipos de Tecnología e Infraestructura.",
			"Equipos de Operaciones y Soporte al Cliente.",
			"Área de Cumplimiento y Seguridad.",
		],
		listType: "ul",
	},
	{
		title: "Componentes Tecnológicos (Foco en Integración)",
		desc: [
			"Plataforma digital central.",
			"Sistemas CRM, BI, SIEM y Gestión Documental.",
			"Sistema de Identidad Única (SSO) y Autenticación Multifactor (MFA).",
		],
		listType: "ul",
	},
];

const outScopeItems: KeyActivityItemType[] = [
	{
		title: "Infraestructura de Red de Bajo Nivel",
		desc: ["Rediseño o definición de hardware de switches, routers."],
		listType: "ul",
	},
	{
		title: "Hardware Propietario",
		desc: ["Desarrollo de hardware propietario."],
		listType: "ul",
	},
	{
		title: "Políticas Internas No Tecnológicas",
		desc: [
			"Políticas de Recursos Humanos o estructura financiera interna de ResqBit (excepto roles de acceso a la plataforma).",
		],
		listType: "ul",
	},
];

const governanceStructure: KeyActivityItemType[] = [
	{
		title: "Comité Directivo de Arquitectura (Nivel Estratégico)",
		desc: [
			{
				text: "Miembros: Dirección General (CEO), CTO.",
				sub: [],
			},
			{
				text: "Responsabilidades: Aprobación final de la visión y los cambios de alto impacto. Asegurar la alineación con los objetivos de negocio y la asignación de recursos.",
				sub: [],
			},
		],
		listType: "ul",
	},
	{
		title: "Junta de Arquitectura (Nivel Táctico)",
		desc: [
			{
				text: "Miembros: Arquitecto Jefe (Chair), Líderes Técnicos (Ciberseguridad, Datos, Desarrollo), Representante de Operaciones.",
				sub: [],
			},
			{
				text: "Responsabilidades: Tomar decisiones de diseño de arquitectura. Revisar y aprobar cambios técnicos. Definir y mantener los estándares (CRM, BI, SIEM). Resolver conflictos técnicos entre equipos.",
				sub: [],
			},
		],
		listType: "ul",
	},
	{
		title: "Equipos de Proyecto (Nivel Operativo)",
		desc: [
			{
				text: "Miembros: Equipos de desarrollo, seguridad e infraestructura.",
				sub: [],
			},
			{
				text: "Responsabilidades: Implementar la arquitectura definida. Elevar solicitudes de cambio o dispensas a la Junta de Arquitectura. Cumplir con los estándares establecidos.",
				sub: [],
			},
		],
		listType: "ul",
	},
];

function PhaseA() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Fase A: Visión de Arquitectura
				</Subtitle1>

				<Subtitle2 className="mb-2" block>
					Visión de Arquitectura
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La visión de arquitectura de ResqBit busca consolidar un ecosistema empresarial unificado que integre
					auditorías ISO, inteligencia de negocio y servicios de ciberseguridad en una misma plataforma digital. El
					objetivo es convertir la complejidad tecnológica y normativa de las PYMEs en procesos simples, medibles y
					automatizados, garantizando confianza, trazabilidad y cumplimiento regulatorio.
				</Text>

				<Subtitle2 className="mb-2" block>
					Enfoques Principales
				</Subtitle2>

				<div className="mb-3">
					{focuses.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<Subtitle2 className="mb-2" block>
					Alineación con Valores Corporativos
				</Subtitle2>

				<Text as="p" size={400} className="mb-4" block>
					La arquitectura se alinea con los valores corporativos de transparencia, eficiencia y confianza digital.
				</Text>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Partes Interesadas (Stakeholders)
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La identificación de las partes interesadas es clave para asegurar que la arquitectura responda a las
					necesidades y preocupaciones de todos los involucrados.
				</Text>

				<Body1Strong className="mb-2" block>
					Matriz de Partes Interesadas de ResqBit
				</Body1Strong>

				<div className="table-responsive mb-4">
					<Table size="small" aria-label="Matriz de Stakeholders">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>Parte Interesada</TableHeaderCell>
								<TableHeaderCell>Rol / Interés Principal</TableHeaderCell>
								<TableHeaderCell>Principales Preocupaciones</TableHeaderCell>
								<TableHeaderCell>Nivel de Influencia</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{stakeholdersData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.stakeholder}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.role}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.concerns}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.influence}</Body1Strong>
										</TableCellLayout>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Alcance de la Arquitectura
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					Definir el alcance es crucial para gestionar las expectativas y enfocar los recursos. Delimita qué partes de
					la empresa se verán afectadas y cuáles no.
				</Text>

				<Body1Strong className="mb-2" block>
					1. Dentro del Alcance (In-Scope)
				</Body1Strong>

				<Text as="p" size={400} className="mb-2" block>
					Las siguientes áreas, procesos y tecnologías son el foco principal de este esfuerzo de arquitectura:
				</Text>

				<div className="mb-3">
					{inScopeItems.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<Body1Strong className="mb-2" block>
					2. Fuera del Alcance (Out-of-Scope)
				</Body1Strong>

				<Text as="p" size={400} className="mb-2" block>
					Para mantener un enfoque claro, los siguientes elementos no se abordarán en el ciclo actual de esta
					arquitectura:
				</Text>

				<div className="mb-4">
					{outScopeItems.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-2" block>
					Modelo de Gobernanza
				</Subtitle2>

				<Text as="p" size={400} className="mb-2" block>
					Se establece un modelo de gobernanza para asegurar que la implementación de la arquitectura se mantenga
					alineada con la visión estratégica y que las decisiones se tomen de manera eficiente.
				</Text>

				<div className="mb-3">
					<Body1>
						<Body1Strong>Modelo Adoptado:</Body1Strong> Jerárquico.
					</Body1>
				</div>

				<div className="mb-3">
					<Body1>
						<Body1Strong>Justificación:</Body1Strong> Este modelo proporciona líneas claras de autoridad y
						responsabilidad, lo cual es esencial para un proyecto de transformación con un alto componente de
						cumplimiento normativo y seguridad como el de ResqBit.
					</Body1>
				</div>

				<Body1Strong className="mb-2" block>
					Estructura de Gobernanza:
				</Body1Strong>

				<div className="mb-3">
					{governanceStructure.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<Body1Strong className="mb-2" block>
					Flujo de Decisión:
				</Body1Strong>

				<Text as="p" size={400} block>
					Las decisiones fluyen de arriba hacia abajo (definición de estándares) y las solicitudes de cambio o revisión
					fluyen de abajo hacia arriba para su aprobación.
				</Text>
			</div>
		</>
	);
}

export default PhaseA;
