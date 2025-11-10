import image1 from "@/assets/Strategies/Blue_O.jpg";
import image2 from "@/assets/Strategies/Red_O.jpg";
import type { TableColumnDefinition } from "@fluentui/react-components";
import {
	Card,
	createTableColumn,
	DataGrid,
	DataGridBody,
	DataGridCell,
	DataGridHeader,
	DataGridHeaderCell,
	DataGridRow,
	Image,
	makeStyles,
	Subtitle2,
	TableCellLayout,
	Text,
	tokens,
} from "@fluentui/react-components";
import clsx from "clsx";
import { useState } from "react";

function BlueOcean() {
	const classes = useStyles();
	const [hovered, setHovered] = useState(false);

	return (
		<div>
			<div className={clsx(classes.container, "mb-3")}>
				<div className={classes.text}>
					<div className="mb-3">
						<Subtitle2 as="h4" block className="mb-1">
							Identificar el <i>Oceano Rojo</i> o el mercado actual donde:
						</Subtitle2>

						<DataGrid items={items} columns={columns} style={{ minWidth: "100%" }}>
							<DataGridHeader>
								<DataGridRow>
									{({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
								</DataGridRow>
							</DataGridHeader>
							<DataGridBody<Item>>
								{({ item, rowId }) => (
									<DataGridRow<Item> key={rowId}>
										{({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
									</DataGridRow>
								)}
							</DataGridBody>
						</DataGrid>
					</div>

					<div className="mb-3">
						<Subtitle2 as="h4" block className="mb-1">
							Reglas:
						</Subtitle2>

						<Text as="p" size={400} block className="mb-1">
							1. Competir dentro de los segmentos establecidos de auditoría.
						</Text>
						<Text as="p" size={400} block className="mb-1">
							2. Enfocarse en los mismos grupos de clientes.
						</Text>
						<Text as="p" size={400} block className="mb-1">
							3. Competir principalmente en precio y relaciones personales.
						</Text>
					</div>

					<div className="mb-3">
						<Subtitle2 as="h4" block className="mb-1">
							Propuesta Innovadora (Oceano Azul)
						</Subtitle2>

						<Text as="p" size={400} block>
							Una auditoría automatizada y predictiva, con experiencia digital trasformadora y un modelo de suscripción
							escalable que impulsa a las PYMES con eficiencia, comunidad y crecimiento sostenible.
						</Text>
					</div>
				</div>

				<figure className="m-0">
					<Image
						src={hovered ? image1 : image2}
						alt="Blue Ocean"
						className={classes.image}
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
					/>
					<figcaption
						style={{
							fontSize: "0.75rem",
							opacity: 0.7,
							marginTop: "0.5rem",
						}}
					>
						{hovered ? "Estrategia de Océano Azul" : "Estrategia de Océano Rojo"}
					</figcaption>
				</figure>
			</div>

			<div>
				<Subtitle2 as="h4" block className="mb-1">
					Beneficios de la Estrategia de Océano Azul
				</Subtitle2>

				<div className={classes.DOFA}>
					{data.map((item, index) => (
						<Card as="div" appearance="outline" key={index}>
							<Text as="h5" weight="bold" className="mb-2">
								{item.title}
							</Text>

							{item.desc.map((descItem, descIndex) => (
								<Text as="p" size={400} block key={descIndex} className="mb-1">
									{descIndex + 1}. {descItem}
								</Text>
							))}
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

interface Item {
	aspecto: string;
	descripcion: string;
}

type ValueStrategyItem = {
	title: string;
	desc: string[];
};

const data: ValueStrategyItem[] = [
	{
		title: "Reducir",
		desc: [
			"Tiempo de auditoría presencial.",
			"Error humano con análisis automatico.",
			"Tiempo de entrega de reportes.",
		],
	},
	{
		title: "Eliminar",
		desc: ["Auditoras presenciales extensas.", "Reportes estensos en PDF."],
	},
	{
		title: "Elevar",
		desc: [
			"Frecuencia de monitoreo.",
			"Trasparencia con clientes.",
			"Personalización: Adaptarse a cada cliente.",
			"Valor Predictivo: Identificar riesgos.",
		],
	},
	{
		title: "Crear",
		desc: ["Auditoria continua como servicio.", "Plataforma de autodiagnóstico.", "Comunidad de mejores prácticas."],
	},
];

const items: Item[] = [
	{ aspecto: "Competencia por precio", descripcion: "Múltiples firmas buscando precios competitivos." },
	{ aspecto: "Servicios estandarizados", descripcion: "Auditorias tradicionales sin mayor diferenciación." },
	{ aspecto: "Alta dependencia (horas/hombre)", descripcion: "Costos variables" },
	{ aspecto: "Clientes descontentos", descripcion: "Largos tiempos de entrega y falta de personalización." },
];

const columns: TableColumnDefinition<Item>[] = [
	createTableColumn<Item>({
		columnId: "aspecto",
		renderHeaderCell: () => "Aspecto",
		renderCell: (item) => <TableCellLayout>{item.aspecto}</TableCellLayout>,
	}),
	createTableColumn<Item>({
		columnId: "descripcion",
		renderHeaderCell: () => "Descripción",
		renderCell: (item) => <TableCellLayout>{item.descripcion}</TableCellLayout>,
	}),
];

const useStyles = makeStyles({
	container: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		gap: tokens.spacingHorizontalL,
		"@media (max-width: 992px)": {
			flexDirection: "column",
		},
	},
	image: {
		width: "100%",
		height: "auto",
		aspectRatio: "784 / 1168",
		objectFit: "contain",
		maxWidth: "clamp(400px, 400px, 784px)",
		transition: "width 0.3s ease",
		cursor: "pointer",
		"@media (max-width: 992px)": {
			order: 1
		},
	},
  text: {
    flexGrow: 1,
    "@media (max-width: 992px)": {
			order: 2
		},
  },
	DOFA: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridTemplateRows: "repeat(2, 1fr)",
		gap: "1rem",
	},
});

export default BlueOcean;
