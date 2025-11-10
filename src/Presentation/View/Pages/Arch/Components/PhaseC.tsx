import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";
import { Subtitle1, Subtitle2, Text } from "@fluentui/react-components";

const components: KeyActivityItemType[] = [
	{
		title: "CRM (HubSpot o Zoho)",
		desc: ["gestión centralizada de clientes, seguimiento comercial y automatización de marketing."],
	},
	{
		title: "Jira / Service Desk",
		desc: ["control de proyectos y tickets internos de auditoría y soporte técnico."],
	},
	{
		title: "Power BI",
		desc: ["dashboards ejecutivos para auditorías, métricas de seguridad, cumplimiento y productividad."],
	},
	{
		title: "SIEM (Azure Sentinel o equivalente)",
		desc: ["monitoreo continuo de seguridad, detección de incidentes y correlación de eventos."],
	},
	{
		title: "SharePoint",
		desc: ["gestión documental con control de versiones, permisos y respaldo en la nube."],
	},
];

function PhaseC() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Information Systems Architecture
				</Subtitle1>

				<Subtitle2 className="mb-1" block>
					Arquitectura de Sistemas de Información
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La arquitectura de sistemas de información en ResQBit conecta las operaciones con herramientas digitales que
					soportan la toma de decisiones y la eficiencia operativa.
				</Text>

				<Subtitle2 className="mb-1" block>
					Componentes Clave
				</Subtitle2>

				<div>
					{components.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<Text as="p" size={400} block>
					La interoperabilidad entre estas plataformas se logra mediante APIs y flujos ETL, asegurando integridad de
					datos, reducción de duplicidades y trazabilidad completa.
				</Text>
			</div>
		</>
	);
}

export default PhaseC;
