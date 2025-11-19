import {
	Badge,
	Body1Strong,
	Caption1,
	Card,
	makeStyles,
	Subtitle1,
	Subtitle2,
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow,
	Text,
	tokens,
} from "@fluentui/react-components";

const useStyles = makeStyles({
	scopeCard: {
		backgroundColor: tokens.colorPaletteLightTealBackground2,
		padding: tokens.spacingVerticalL,
	},
	missionCard: {
		backgroundColor: tokens.colorPaletteNavyBackground2,
		padding: tokens.spacingVerticalL,
	},
	visionCard: {
		backgroundColor: tokens.colorPalettePinkBackground2,
		padding: tokens.spacingVerticalL,
	},
	badgeAlto: {
		backgroundColor: "#d43582",
		color: tokens.colorNeutralForegroundInverted,
	},
	badgeMedioAlto: {
		backgroundColor: "#f1684d",
		color: tokens.colorNeutralForegroundInverted,
	},
	badgeMedio: {
		backgroundColor: "#eaa300",
		color: tokens.colorNeutralForegroundInverted,
	},
});

const stakeholdersData = [
	{
		group: "Clientes (PYMES)",
		description:
			"Empresas pequeñas y medianas que contratan servicios de auditoría, ciberseguridad y certificaciones ISO.",
		interest: "Mejora de procesos, cumplimiento normativo, seguridad de la información, transformación digital.",
		influence: "Alto",
		expectations: "Soluciones personalizadas, resultados verificables, confianza y soporte continuo.",
	},
	{
		group: "Colaboradores internos y consultores",
		description: "Equipo técnico, auditores ISO, analistas BI, especialistas en seguridad y gestión.",
		interest: "Desarrollo profesional, herramientas efectivas, ambiente seguro y reconocimiento.",
		influence: "Alto",
		expectations: "Capacitación, liderazgo claro, comunicación y bienestar laboral.",
	},
	{
		group: "Proveedores y aliados estratégicos",
		description:
			"Empresas que suministran software, licencias, infraestructura cloud (Microsoft, AWS, Google), o servicios especializados.",
		interest: "Relaciones comerciales sostenibles, cumplimiento contractual y tecnológico.",
		influence: "Medio-Alto",
		expectations: "Contratos claros, pagos oportunos, comunicación fluida y crecimiento conjunto.",
	},
	{
		group: "Entes reguladores y organismos de certificación",
		description: "Autoridades legales y organismos acreditados (ICONTEC, ONAC, ISO, Ministerios, etc.).",
		interest: "Cumplimiento normativo y legal en calidad, ambiente, SST y seguridad de la información.",
		influence: "Alto",
		expectations: "Transparencia, trazabilidad documental y cumplimiento de estándares ISO.",
	},
	{
		group: "Competencia (otras consultoras ISO / TI)",
		description: "Empresas competidoras en el sector de consultoría, auditoría y transformación digital.",
		interest: "Posicionamiento y diferenciación de mercado.",
		influence: "Medio",
		expectations: "Competencia leal, innovación, mejora continua del sector.",
	},
	{
		group: "Socios e inversionistas",
		description: "Accionistas y fundadores que aportan capital o liderazgo estratégico.",
		interest: "Rentabilidad, sostenibilidad, crecimiento de la empresa.",
		influence: "Alto",
		expectations: "Retorno sobre inversión, transparencia y resultados financieros.",
	},
	{
		group: "Proveedores de tecnología (TIC)",
		description:
			"Plataformas SaaS, herramientas de BI, seguridad, ERP y colaboración (Microsoft, Power BI, Splunk, Helisa, etc.).",
		interest: "Integración efectiva, licenciamiento correcto y cumplimiento de SLA.",
		influence: "Medio",
		expectations: "Continuidad operativa, soporte técnico, actualización de herramientas.",
	},
	{
		group: "Comunidad y entorno social",
		description: "Sociedad y ecosistema empresarial donde opera ResQBit.",
		interest: "Responsabilidad social, sostenibilidad ambiental y apoyo al desarrollo local.",
		influence: "Medio",
		expectations: "Programas verdes, empleos responsables y comunicación transparente.",
	},
	{
		group: "Autoridades ambientales y laborales",
		description: "Entidades gubernamentales que supervisan temas de sostenibilidad y SST.",
		interest: "Cumplimiento legal, reportes de desempeño ambiental y seguridad.",
		influence: "Alto",
		expectations: "Cumplimiento regulatorio, cultura preventiva y mejora continua.",
	},
	{
		group: "Clientes potenciales / prospectos digitales",
		description: "Empresas que aún no contratan servicios, pero están en proceso de transformación digital.",
		interest: "Conocer beneficios, confianza en la marca.",
		influence: "Medio",
		expectations: "Comunicación efectiva, casos de éxito, oferta de valor clara.",
	},
];

function PhaseA() {
	const classes = useStyles();

	const getInfluenceBadge = (influence: string) => {
		switch (influence) {
			case "Alto":
				return (
					<Badge appearance="filled" className={classes.badgeAlto}>
						Alto
					</Badge>
				);
			case "Medio-Alto":
				return (
					<Badge appearance="filled" className={classes.badgeMedioAlto}>
						Medio-Alto
					</Badge>
				);
			case "Medio":
				return (
					<Badge appearance="filled" className={classes.badgeMedio}>
						Medio
					</Badge>
				);
			default:
				return <Badge>{influence}</Badge>;
		}
	};

	return (
		<div>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Architecture Vision
				</Subtitle1>
			</div>

			<div className="row gx-3 gy-3 mb-4">
				<div className="col-12">
					<Card appearance="filled" className={classes.scopeCard}>
						<Subtitle2 as="h3" className="mb-3" block>
							Alcance
						</Subtitle2>
						<Text as="p" size={400} block>
							El alcance de la empresa ResQBit abarca la prestación de servicios de auditoría, consultoría y mejora
							continua en las áreas de Business Intelligence, Ciberseguridad, Gestión de la Calidad y Certificaciones
							Internacionales ISO (9001, 14001, 27001 y 45001). Estos servicios están dirigidos principalmente a
							pequeñas y medianas empresas (PYMES), y se prestan tanto de forma presencial como remota, utilizando
							plataformas digitales seguras, con el propósito de fortalecer la gestión organizacional, asegurar el
							cumplimiento normativo y promover la transformación digital sostenible de los clientes.
						</Text>
					</Card>
				</div>

				<div className="col-12 col-md-6">
					<Card appearance="filled" className={classes.missionCard}>
						<Subtitle2 as="h3" className="mb-3" block>
							Misión
						</Subtitle2>
						<Text as="p" size={400} block>
							Brindar a las PYMES soluciones integrales de auditoría, consultoría y mejora continua en Business
							Intelligence, Ciberseguridad y Certificaciones ISO, fortaleciendo la confianza, la calidad y la
							sostenibilidad de sus operaciones, a través de un equipo especializado, procesos digitales seguros y
							metodologías personalizadas, ResQBit busca convertir la complejidad en claridad, asegurando la eficiencia,
							la innovación tecnológica y el cumplimiento normativo en cada proyecto.
						</Text>
					</Card>
				</div>

				<div className="col-12 col-md-6">
					<Card appearance="filled" className={classes.visionCard}>
						<Subtitle2 as="h3" className="mb-3" block>
							Visión
						</Subtitle2>
						<Text as="p" size={400} block>
							Ser reconocidos en Latinoamérica como la empresa líder en auditorías tecnológicas y consultoría ISO,
							consolidándonos como el socio estratégico de las PYMES en su proceso de transformación digital. Para 2030,
							ResQBit aspira a ser un referente regional por su innovación, seguridad de la información y excelencia
							operativa, contribuyendo al desarrollo de organizaciones más sostenibles, seguras y competitivas.
						</Text>
					</Card>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Stakeholders
				</Subtitle2>
				<Text as="p" size={400} className="mb-3" block>
					Los stakeholders de ResQBit se verán identificados por medio de la siguiente matriz que representa las
					características principales de cada rol.
				</Text>

				<div className="mb-2">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Grupo de Interés</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Descripción / Rol</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Interés Principal</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Nivel de Influencia</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Expectativas Clave</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{stakeholdersData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<Body1Strong>{item.group}</Body1Strong>
									</TableCell>
									<TableCell>{item.description}</TableCell>
									<TableCell>{item.interest}</TableCell>
									<TableCell>{getInfluenceBadge(item.influence)}</TableCell>
									<TableCell>{item.expectations}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				<Caption1 as="p" className="mb-2" block>
					Tabla 1. Identificación de Partes Interesadas (Stakeholders)
				</Caption1>
			</div>
		</div>
	);
}

export default PhaseA;
