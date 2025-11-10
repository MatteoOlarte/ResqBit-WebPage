import {
	DataGrid,
	DataGridBody,
	DataGridCell,
	DataGridHeader,
	DataGridHeaderCell,
	DataGridRow,
	Subtitle1,
	Subtitle2,
	TableCellLayout,
	Text,
	createTableColumn,
	type TableColumnDefinition,
} from "@fluentui/react-components";
import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";

const data: KeyActivityItemType[] = [
	{
		title: "Monitoreo de entornos",
		desc: [
			"Observar el entorno tecnológico y regulatorio para detectar disparadores:",
			{
				text: "",
				sub: [
					"Cambios en normativas ISO.",
					"Nuevas amenazas o vulnerabilidades detectadas.",
					"Innovaciones (IA, automatización de auditorías).",
					"Solicitudes de clientes o indicadores de mejora (según OKR).",
				],
				listType: "ul",
			},
		],
	},
	{
		title: "Detección y evaluación de cambios",
		desc: [
			"Recibir solicitudes de cambio desde:",
			{
				text: "",
				sub: [
					"Auditorías internas / externas.",
					"Resultados de KPIs (por ejemplo, baja satisfacción del cliente).",
					"Actualizaciones en infraestructura (nube, licencias, etc.).",
				],
				listType: "ul",
			},
			"Evaluar el impacto en los dominios de negocio, datos, aplicaciones y tecnología.",
		],
	},
	{
		title: "Clasificación del cambio",
		desc: [
			"Cambio menor: ajustes a configuraciones o políticas internas.",
			"Cambio mayor: adopción de nuevas tecnologías, procesos o servicios (ejemplo: migrar de OpenVAS a Tenable).",
		],
	},
	{
		title: "Aprobación y ejecución",
		desc: [
			"El comité de arquitectura evalúa y aprueba los cambios.",
			"Si el cambio es significativo, inicia un nuevo ciclo ADM (desde la fase A).",
		],
	},
	{
		title: "Actualización de repositorio y documentación",
		desc: [
			"Registrar las modificaciones aprobadas en el repositorio arquitectónico y documental.",
			"Actualizar catálogos, matrices y diagramas.",
			"Mantener versiones controladas y trazabilidad de decisiones.",
		],
	},
	{
		title: "Medición de efectividad",
		desc: [
			"Establecer métricas de gestión del cambio:",
			{
				text: "",
				sub: [
					"% de cambios implementados sin incidentes ≥ 95%",
					"MTTC (Mean Time to Change) ≤ 30 días",
					"% de documentación actualizada dentro de los 7 días posteriores a cada cambio",
					"Deuda técnica controlada ≤ 5%",
				],
				listType: "ul",
			},
		],
	},
];

interface Deliverable {
	entregable: string;
	descripcion: string;
}

const deliverables: Deliverable[] = [
	{
		entregable: "Registro de Cambios Arquitectónicos (Change Log)",
		descripcion: "Documenta cada cambio con su impacto y decisión.",
	},
	{
		entregable: "Evaluación de Impacto (Impact Assessment)",
		descripcion: "Análisis técnico y de negocio de cada cambio.",
	},
	{
		entregable: "Actas de Comité de Arquitectura",
		descripcion: "Decisiones y aprobaciones de cambios.",
	},
	{
		entregable: "Versionamiento del Repositorio",
		descripcion: "Revisión actualizada de los modelos TOGAF y documentación técnica.",
	},
	{
		entregable: "Informe de Mejora Continua",
		descripcion: "Evalúa el valor aportado por los cambios y retroalimenta ITIL4.",
	},
];

const columns: TableColumnDefinition<Deliverable>[] = [
	createTableColumn<Deliverable>({
		columnId: "entregable",
		renderHeaderCell: () => <Text weight="semibold">Entregable</Text>,
		renderCell: (item) => <TableCellLayout>{item.entregable}</TableCellLayout>,
	}),
	createTableColumn<Deliverable>({
		columnId: "descripcion",
		renderHeaderCell: () => <Text weight="semibold">Descripción</Text>,
		renderCell: (item) => <TableCellLayout>{item.descripcion}</TableCellLayout>,
	}),
];

const itilData: KeyActivityItemType[] = [
	{
		title: "Change Enablement (ITIL4)",
		desc: ["canaliza formalmente las solicitudes de cambio arquitectónico."],
	},
	{
		title: "Continual Improvement",
		desc: [
			"usa indicadores (presencia digital, satisfacción, eficiencia operativa) para detectar oportunidades de mejora",
			"OKR y KPIs",
		],
	},
	{
		title: "Information Security Management",
		desc: ["asegura que cada cambio preserve la CIA (confidencialidad, integridad y disponibilidad)."],
	},
	{
		title: "Knowledge Management",
		desc: ["mantiene documentación viva y accesible en SharePoint / Confluence"],
	},
];

function PhaseH() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Architecture Change Management
				</Subtitle1>

				<Subtitle2 className="mb-1" block>
					Propósito
				</Subtitle2>

				<Text as="p" size={400} className="mb-1" block>
					Mantener la arquitectura empresarial de ResQBit actualizada, adaptable y alineada con:
				</Text>
				<ul>
					<li>Las nuevas necesidades del negocio (expansión, nuevos clientes o servicios ISO).</li>
					<li>Los cambios tecnológicos (por ejemplo, IA, nuevas herramientas SIEM o automatización).</li>
					<li>Las regulaciones y mejores prácticas internacionales (ISO, NIST, GDPR, etc.).</li>
				</ul>
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
					Entregables de la Fase H
				</Subtitle2>

				<DataGrid items={deliverables} columns={columns} style={{ minWidth: "100%" }}>
					<DataGridHeader>
						<DataGridRow>
							{({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
						</DataGridRow>
					</DataGridHeader>
					<DataGridBody<Deliverable>>
						{({ item, rowId }) => (
							<DataGridRow<Deliverable> key={rowId}>
								{({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
							</DataGridRow>
						)}
					</DataGridBody>
				</DataGrid>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-1" block>
					Integración con ITIL4 y tus OKR
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

export default PhaseH;
