import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";
import { Subtitle1, Subtitle2, Text } from "@fluentui/react-components";

const processes: KeyActivityItemType[] = [
	{
		title: "Auditorías ISO 27001 y 9001",
		desc: ["planificación, evaluación, hallazgos, reportes automáticos y seguimiento de acciones correctivas."],
	},
	{
		title: "Gestión de vulnerabilidades",
		desc: ["detección, priorización, remediación y control mediante informes centralizados."],
	},
	{
		title: "Proyectos de Business Intelligence",
		desc: ["recopilación de datos, modelado, creación de dashboards e indicadores de cumplimiento."],
	},
];

const roles: KeyActivityItemType[] = [
	{
		title: "Auditores",
		desc: ["validan la conformidad de los procesos y la seguridad."],
	},
	{
		title: "Analistas de BI y Ciberseguridad",
		desc: ["transforman datos en información accionable."],
	},
	{
		title: "Coordinadores de Proyecto",
		desc: ["aseguran la alineación con los objetivos del cliente y la entrega oportuna."],
	},
	{
		title: "Comité de Gobernanza",
		desc: ["supervisa estándares de seguridad, calidad y cumplimiento ISO."],
	},
];

function PhaseB() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Business Architecture
				</Subtitle1>

				<Subtitle2 className="mb-1" block>
					Arquitectura de Negocio
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La arquitectura de negocio en ResQBit estructura los procesos clave, roles y reglas operativas que permiten
					brindar servicios de auditoría, BI y ciberseguridad de forma estandarizada y escalable.
				</Text>

				<div className="mb-4">
					<Subtitle2 className="mb-1" block>
						Procesos Principales
					</Subtitle2>

					{processes.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<div className="mb-4">
					<Subtitle2 className="mb-1" block>
						Roles Definidos
					</Subtitle2>

					{roles.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<Text as="p" size={400} block>
					Esta arquitectura busca sincronizar el flujo de trabajo entre áreas técnicas y de negocio, garantizando
					trazabilidad total de cada servicio entregado.
				</Text>
			</div>
		</>
	);
}

export default PhaseB;
