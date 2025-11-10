import { Badge, Card, Text } from "@fluentui/react-components";

type PorterForce = {
	title: string;
	desc: string;
	level: "Alta" | "Alta-Media" | "Media" | "Media-Baja" | "Baja";
};

const data: PorterForce[] = [
	{
		title: "Amenaza de nuevos competidores",
		desc: "Firmas contables tradicionales expandiéndose a servicios digitales.",
		level: "Alta-Media",
	},
	{
		title: "Amenaza de productos sustitutos",
		desc: "Consultoría tradicional sin componente tecnológico, soluciones internas.",
		level: "Alta",
	},
	{
		title: "Poder de negociación de los proveedores",
		desc: "Herramientas \"Open-Source\" o de código abierto y costos de licencias elevados.",
		level: "Media",
	},
	{
		title: "Poder de negociación de los clientes",
		desc: "Flexibilidad y personalización, sensibilidad a precios.",
		level: "Alta",
	},
  {
    title: "Rivalidad entre competidores existentes",
    desc: "Múltiples firmas compitiendo por el mismo nicho de mercado. Competencia por talento y tecnología.",
    level: "Alta",
  }
];

function Porter() {
	return data.map((force, index) => <Item key={index} index={index + 1} force={force} />);
}

function Item({ index, force }: { index: number; force: PorterForce }) {
	return (
		<Card appearance="outline" className="mb-1">
			<article className="d-flex flex-row align-items-center justify-content-between gap-4">
				<Text as="span" size={600} weight="semibold">
					{index}
				</Text>

				<div className="flex-grow-1">
					<div className="d-flex flex-row gap-2">
						<Text as="h4" size={400} weight="semibold" block>
							{force.title}
						</Text>

						<Badge appearance="filled" color={getColor(force.level)}>
							{force.level}
						</Badge>
					</div>

					<Text as="span" size={400} block>
						{force.desc}
					</Text>
				</div>
			</article>
		</Card>
	);
}

function getColor(level: string) {
	switch (level) {
		case "Alta":
			return "danger";
		case "Alta-Media":
			return "severe";
		case "Media":
			return "warning";
		case "Media-Baja":
			return "warning";
		case "Baja":
			return "success";
		default:
			return "brand";
	}
}

export default Porter;
