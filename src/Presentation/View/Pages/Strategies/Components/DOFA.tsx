import { Text, makeStyles, tokens } from "@fluentui/react-components";
import clsx from "clsx";
import React from "react";

const _data = {
	debilidades: [
		"Marca y Empresa con recursos financieros limitados para desarrollar tecnologías de automatización.",
		"Procesos manuales predominantes en recolección y análisis de evidencia.",
		"Curva de aprendizaje para implementar herramientas de automatización.",
		"Auditorías presenciales que incrementan costos y tiempos.",
	],
	oportunidades: [
		"Creciente demanda de PYMES por servicios de auditoría asequibles y eficientes.",
		"Tendencia hacia el trabajo remoto que facilita auditorías virtuales.",
		"Avances de herramientas low-code que reducen costos de desarrollo.",
		"Disponibilidad de APIs que permiten integración con los sistemas contables.",
	],
	fortalezas: [
		"Conocimiento especializado en normas ISO y procedimientos de auditoría.",
		"Capacidad de personalización para adaptarse a diferentes tipos de PYMES.",
		"Metodologías de auditoría ya establecidas y probadas.",
		"Equipo con habilidades técnicas en BI y ciberseguridad.",
	],
	amenazas: [
		"Competencias de grandes firmas que ya tienen procesos automatizados.",
		"Resistencia cultural en PYMES a adoptar totalmente auditorías digitales.",
		"Sensibilidad de precio en el segmento PYME, que limita inversiones.",
	],
};

function DOFA(): React.JSX.Element {
	const classes = useStyles();

	return (
		<div className={classes.DOFA}>
			<div className={clsx(classes.quadrant, classes.quadrant01)}>
				<Text as="h4" weight="bold" size={600} block className="text-uppercase">
					Debilidades
				</Text>
				<ListGroup data={_data.debilidades} />
			</div>

			<div className={clsx(classes.quadrant, classes.quadrant02)}>
				<Text as="h4" weight="bold" size={600} block className="text-uppercase">
					Amenazas
				</Text>
				<ListGroup data={_data.amenazas} />
			</div>

			<div className={clsx(classes.quadrant, classes.quadrant03)}>
				<Text as="h4" weight="bold" size={600} block className="text-uppercase">
					Fortalezas
				</Text>
				<ListGroup data={_data.fortalezas} />
			</div>

			<div className={clsx(classes.quadrant, classes.quadrant04)}>
				<Text as="h4" weight="bold" size={600} block className="text-uppercase">
					Oportunidades
				</Text>
				<ListGroup data={_data.oportunidades} />
			</div>
		</div>
	);
}

function ListGroup({ data }: { data: string[] }): React.JSX.Element {
	const classes = useStyles();

	return (
		<ol className={classes.listGroup}>
			{data.map((item, index) => (
				<li key={index} className={classes.listGroupItem}>
					{item}
				</li>
			))}
		</ol>
	);
}

const useStyles = makeStyles({
	DOFA: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridTemplateRows: "repeat(2, 1fr)",
		gap: "1rem",
		"@media (max-width: 768px)": {
			gridTemplateColumns: "1fr",
			gridTemplateRows: "auto",
		},
	},
	quadrant: {
		borderRadius: tokens.borderRadiusMedium,
		padding: "1rem",
		boxShadow: tokens.shadow8,
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
		color: tokens.colorNeutralForegroundInverted,
		minHeight: 0,
	},
	quadrant01: {
		backgroundColor: tokens.colorPaletteMarigoldBackground3,
	},
	quadrant02: {
		backgroundColor: tokens.colorPaletteRedBackground3,
	},
	quadrant03: {
		backgroundColor: tokens.colorPaletteGreenBackground3,
	},
	quadrant04: {
		backgroundColor: tokens.colorPaletteBlueBorderActive,
	},
	listGroup: {
		display: "flex",
		flexDirection: "column",
		paddingLeft: 0,
		marginBottom: 0,
		borderRadius: 0,
		listStyleType: "none",
		counterReset: "section",
	},
	listGroupItem: {
		position: "relative",
		display: "block",
		padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
		border: "none",
		borderBottom: `${tokens.strokeWidthThin} solid color-mix(in srgb, ${tokens.colorNeutralStroke3}, transparent 50%)`,
		wordWrap: "break-word",
		hyphens: "auto",
		"&:first-child": {
			borderTopLeftRadius: tokens.borderRadiusMedium,
			borderTopRightRadius: tokens.borderRadiusMedium,
		},
		"&:last-child": {
			borderBottomLeftRadius: tokens.borderRadiusMedium,
			borderBottomRightRadius: tokens.borderRadiusMedium,
			borderBottom: "none",
		},
		"&::before": {
			content: 'counter(section) ". "',
			counterIncrement: "section",
		},
	},
});

export default DOFA;
