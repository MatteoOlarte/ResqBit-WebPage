import {
	Subtitle1,
	Subtitle2,
	Text,
} from "@fluentui/react-components";
import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";

const data: KeyActivityItemType[] = [
	{
		title: "Establecimiento de gobernanza de implementación",
		desc: [
			{
				text: "Crear el Architecture Review Board (ARB) o Comité de Arquitectura, integrado por:",
				sub: [
					"Líder de Ciberseguridad",
					"Líder de Business Intelligence",
					"Gerente de Calidad / ISO",
					"CTO o Director de Tecnología",
				],
				listType: "ul",
			},
			"Su función: revisar, aprobar y monitorear los proyectos antes, durante y después de su ejecución.",
		],
	},
	{
		title: "Evaluación de conformidad arquitectónica",
		desc: [
			"Cada proyecto (por ejemplo, un nuevo tablero de Power BI o un despliegue de Wazuh/SIEM) debe pasar por una Architecture Compliance Review.",
			{
				text: "Se validan:",
				sub: [
					"Cumplimiento de principios (seguridad, interoperabilidad, escalabilidad)",
					"Uso de estándares definidos en la arquitectura tecnológica (Azure, SharePoint, n8n, etc.)",
					"Cumplimiento con normas ISO aplicables (27001, 9001, 21001).",
				],
				listType: "ul",
			},
		],
	},
	{
		title: "Gestión de riesgos y desviaciones",
		desc: [
			"Documentar desviaciones justificadas y mantener un registro de excepciones aprobadas.",
			"Establecer medidas correctivas o controles compensatorios (por ejemplo, reforzar auditorías si no se aplica un estándar técnico).",
		],
	},
	{
		title: "Supervisión de la entrega",
		desc: [
			"Asegurar que los equipos de desarrollo, BI o ciberseguridad implementen los entregables dentro de los SLA definidos (MTTD, MTTR, etc.).",
			{
				text: "Incorporar KPIs de calidad y cumplimiento:",
				sub: [
					"% soluciones alineadas a arquitectura ≥ 95%",
					"% proyectos sin desviaciones críticas = 100%",
					"% cumplimiento RPO/RTO por servicio ≥ 95%",
				],
				listType: "ul",
			},
		],
	},
	{
		title: "Actualización documental",
		desc: [
			"Todo cambio o aprobación se refleja en el repositorio documental (SharePoint / Confluence).",
			"Las soluciones implementadas se documentan en el catálogo de aplicaciones y tecnología.",
		],
	},
];

const itilData: KeyActivityItemType[] = [
	{
		title: "Change Enablement + Release Management",
		desc: ["Aseguran que los cambios aprobados sigan la gobernanza arquitectónica."],
	},
	{
		title: "Continual Improvement",
		desc: ["Retroalimenta la madurez de los procesos y servicios"],
	},
	{
		title: "Service Level Management",
		desc: ["Mide los KPIs definidos en OKR y matriz de valor OKR y KPIs."],
	},
];

function PhaseG() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Implementation Governance
				</Subtitle1>

				<Subtitle2 className="mb-1" block>
					Propósito
				</Subtitle2>

				<Text as="p" size={400} className="mb-1" block>
					Asegurar que las implementaciones (soluciones tecnológicas, procesos y servicios) cumplan con la arquitectura
					objetivo definida en las fases anteriores (B–F) y se mantengan alineadas con los objetivos estratégicos y de
					valor de ResQBit.
				</Text>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-1" block>
					Actividades clave
				</Subtitle2>

				<div>
					{data.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-1" block>
					Integración con ITIL 4.0
				</Subtitle2>

				<div>
					{itilData.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>
			</div>
		</>
	);
}

export default PhaseG;
