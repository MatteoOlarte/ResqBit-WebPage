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
	makeStyles,
	tokens,
} from "@fluentui/react-components";
import image from "@/assets/Arch/phaseB_img0-4x.png";

const capabilitiesData = [
	{
		capability: "Auditoría y Certificación ISO",
		description:
			"Ejecución de auditorías internas y externas, diagnósticos de brecha, planes de mejora y acompañamiento para certificaciones ISO (9001, 14001, 27001, 45001, 21001).",
		result: "Cumplimiento normativo y mejora continua en las PYMES.",
	},
	{
		capability: "Consultoría Digital Sostenible y Remota",
		description:
			"Prestación de servicios bajo modalidad digital y remota, aplicando prácticas sostenibles que reducen costos, tiempos y huella ambiental.",
		result: "Operación eficiente, accesible y ambientalmente responsable para el cliente.",
	},
	{
		capability: "Business Intelligence (BI) y Analítica de Datos",
		description:
			"Modelamiento, transformación y visualización de datos para toma de decisiones, creación de tableros, capacitación y soporte.",
		result: "Decisiones basadas en datos, control de gestión y madurez digital.",
	},
	{
		capability: "Gestión de Ciberseguridad y Vulnerabilidades",
		description:
			"Pruebas de seguridad (RedTeam, OWISAM, ingeniería social), auditorías de red, despliegue de SIEM y controles de acceso seguro.",
		result: "Protección de activos críticos y reducción de riesgos tecnológicos.",
	},
	{
		capability: "Gestión Documental y Protección de Activos de Información (capacidad habilitadora transversal)",
		description:
			"Control, custodia, integridad, disponibilidad y confidencialidad de la información durante la consultoría y auditoría. Incluye versionado, trazabilidad y cifrado.",
		result: "Confianza, transparencia y cumplimiento de requisitos legales y de seguridad.",
	},
];

const processesData = [
	{
		process: "Auditoría",
		inputs: "Checklists, evidencias",
		activities: "Verificación, análisis, hallazgos",
		results: "Informe de auditoría",
	},
	{
		process: "Seguridad",
		inputs: "Configuraciones, activos",
		activities: "Escaneos, monitoreo, mitigación",
		results: "Dashboard SIEM + plan correctivo",
	},
	{
		process: "BI",
		inputs: "Datos brutos",
		activities: "Limpieza, modelado, visualización",
		results: "Tableros Power BI",
	},
	{
		process: "Certificación",
		inputs: "Normas ISO",
		activities: "Gap analysis + implementación",
		results: "Sistema de gestión aplicado",
	},
	{
		process: "Mejora Continua",
		inputs: "Hallazgos",
		activities: "Acciones correctivas",
		results: "Cumplimiento y madurez sostenida",
	},
];

const raciData = [
	{
		activity: "Definir alcance del servicio",
		dirGeneral: "A",
		dirComercial: "C",
		auditoriaSeg: "R",
		biAnalitica: "C",
		adminFinanzas: "I",
	},
	{
		activity: "Ejecutar el servicio (Auditoría / Seguridad / BI)",
		dirGeneral: "I",
		dirComercial: "I",
		auditoriaSeg: "R",
		biAnalitica: "R",
		adminFinanzas: "I",
	},
	{
		activity: "Elaborar informes y hallazgos",
		dirGeneral: "I",
		dirComercial: "I",
		auditoriaSeg: "R",
		biAnalitica: "C",
		adminFinanzas: "I",
	},
	{
		activity: "Validar y aprobar informe final",
		dirGeneral: "A",
		dirComercial: "C",
		auditoriaSeg: "R",
		biAnalitica: "C",
		adminFinanzas: "I",
	},
	{
		activity: "Diseñar plan de mejora",
		dirGeneral: "C",
		dirComercial: "I",
		auditoriaSeg: "R",
		biAnalitica: "R",
		adminFinanzas: "I",
	},
	{
		activity: "Hacer seguimiento al plan",
		dirGeneral: "C",
		dirComercial: "I",
		auditoriaSeg: "R",
		biAnalitica: "R",
		adminFinanzas: "I",
	},
	{
		activity: "Cierre administrativo y facturación",
		dirGeneral: "I",
		dirComercial: "C",
		auditoriaSeg: "I",
		biAnalitica: "I",
		adminFinanzas: "A",
	},
];

function PhaseB() {
	const classes = useStyles();

	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Business Architecture
				</Subtitle1>

				{/* Idea Principal Card */}
				<Card className={classes.visionCard}>
					<Text as="p" size={500} italic align="center" className={classes.visionText}>
						"ResQBit ayuda a las PYMES a operar con confianza y eficiencia mediante soluciones integrales que combinan
						analítica de datos, certificación de calidad, sostenibilidad y ciberseguridad, entregadas con trazabilidad y
						acompañamiento consultivo en cada etapa."
					</Text>
				</Card>
			</div>

			{/* Capacidades del Negocio */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Capacidades del Negocio
				</Subtitle2>

				<div className="table-responsive">
					<Table size="small" aria-label="Capacidades del Negocio">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Capacidad</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Descripción</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Resultado que habilita</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{capabilitiesData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.capability}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.description}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.result}</TableCellLayout>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			{/* Modelo Operativo / Cadena de Valor */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Modelo Operativo / Cadena de Valor
				</Subtitle2>

				{/* Espacio reservado para imagen */}
				<div className={classes.imagePlaceholder}>
					
				</div>

				<Text as="p" size={400} className="mb-3" block>
					El modelo operativo de ResQBit se estructura como una secuencia de actividades que permiten acompañar a la
					PYME desde la identificación de su necesidad hasta la implementación de mejoras y el cierre del servicio. El
					proceso inicia con la <strong>prospección y entendimiento del contexto</strong>, donde se determina la
					situación actual de la organización, sus prioridades y los riesgos asociados. A partir de esto, se realiza un{" "}
					<strong>diagnóstico inicial</strong>, en el que se define con claridad el alcance, los objetivos específicos y
					el plan de trabajo acordado con el cliente.
				</Text>

				<Text as="p" size={400} className="mb-3" block>
					Posteriormente, se desarrolla la <strong>ejecución del servicio</strong>, que puede incluir auditorías en
					normas ISO, pruebas de ciberseguridad, modelamiento de datos o consultoría digital sostenible, según la
					necesidad del cliente. Durante esta fase, se recopilan evidencias, se aplican metodologías estandarizadas y se
					documentan los resultados de manera trazable.
				</Text>

				<Text as="p" size={400} className="mb-3" block>
					Una vez finalizada la ejecución, se procede a la <strong>elaboración del informe</strong>, donde se presentan
					los hallazgos, el análisis técnico y las conclusiones de manera clara y comprensible para la PYME. Este
					informe da paso al <strong>plan de mejora</strong>, en el que se establecen acciones concretas, responsables y
					tiempos de implementación orientados a fortalecer los procesos y el nivel de madurez de la organización.
				</Text>

				<Text as="p" size={400} block>
					Finalmente, se realiza un <strong>seguimiento</strong> para verificar la efectividad de las acciones
					implementadas y se cierra el servicio con una retroalimentación final que permite evaluar el impacto y
					proyectar oportunidades de continuidad. Este modelo asegura trazabilidad, consistencia y acompañamiento
					consultivo, generando confianza y sostenibilidad en la relación con el cliente.
				</Text>
			</div>

			{/* Procesos Clave */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Procesos Clave
				</Subtitle2>

				<div className="table-responsive">
					<Table size="small" aria-label="Procesos Clave">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Proceso</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Entradas</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Actividades centrales</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Resultados</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{processesData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.process}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.inputs}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.activities}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>{item.results}</TableCellLayout>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			{/* Roles y Responsabilidades (RACI) */}
			<div className="mb-4">
				<Subtitle2 className="mb-3" block>
					Roles y Responsabilidades (RACI)
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					En el modelo RACI se definen los niveles de participación de cada rol dentro de cada actividad:
				</Text>

				<div className="mb-3">
					<div className={classes.raciItem}>
						<span className={classes.raciLetter}>R</span>
						<div>
							<Body1Strong>Responsible (Responsable ejecutor):</Body1Strong>
							<Text as="p" size={400}>
								Es la persona o rol que realiza la tarea. Ejecuta las actividades y produce el entregable. Puede haber
								varios responsables operativos, dependiendo de la naturaleza del trabajo.
							</Text>
						</div>
					</div>

					<div className={classes.raciItem}>
						<span className={classes.raciLetter}>A</span>
						<div>
							<Body1Strong>Accountable (Aprobador / Dueño del resultado):</Body1Strong>
							<Text as="p" size={400}>
								Es quien toma la decisión final y responde por el resultado de la actividad. Tiene la autoridad para
								aprobar o rechazar lo realizado por el responsable. Debe haber solo una persona con este rol por
								actividad, para evitar ambigüedades.
							</Text>
						</div>
					</div>

					<div className={classes.raciItem}>
						<span className={classes.raciLetter}>C</span>
						<div>
							<Body1Strong>Consulted (Consultado):</Body1Strong>
							<Text as="p" size={400}>
								Es la persona o rol que aporta criterio, información técnica o experiencia antes o durante la ejecución.
								Su participación es activa, pero no ejecuta ni aprueba. La comunicación es bidireccional.
							</Text>
						</div>
					</div>

					<div className={classes.raciItem}>
						<span className={classes.raciLetter}>I</span>
						<div>
							<Body1Strong>Informed (Informado):</Body1Strong>
							<Text as="p" size={400}>
								Es quien debe ser notificado sobre el progreso o el resultado de la actividad. No participa en la
								ejecución ni en la decisión, pero necesita estar al tanto. La comunicación es unidireccional.
							</Text>
						</div>
					</div>
				</div>

				<div className="table-responsive">
					<Table size="small" aria-label="Matriz RACI">
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Actividad</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Dirección General</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Dirección Comercial</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Auditoría / Seguridad</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>BI / Analítica</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Administración / Finanzas</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							{raciData.map((item, index) => (
								<TableRow key={index}>
									<TableCell>
										<TableCellLayout>{item.activity}</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.dirGeneral}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.dirComercial}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.auditoriaSeg}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.biAnalitica}</Body1Strong>
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											<Body1Strong>{item.adminFinanzas}</Body1Strong>
										</TableCellLayout>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</>
	);
}

const useStyles = makeStyles({
	visionCard: {
		backgroundColor: tokens.colorNeutralBackground2,
		padding: "24px",
		marginBottom: "24px",
		boxShadow: tokens.shadow8,
	},
	visionText: {
		lineHeight: "1.6",
		color: tokens.colorNeutralForeground1,
	},
	imagePlaceholder: {
		backgroundColor: tokens.colorNeutralBackground3,
		border: `2px dashed ${tokens.colorNeutralStroke1}`,
		borderRadius: tokens.borderRadiusMedium,
		padding: "48px 24px",
		marginBottom: "24px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "200px",
		backgroundImage: `url(${image})`,
		aspectRatio: "16 / 9",
		backgroundSize: "cover",
	},
	raciItem: {
		display: "flex",
		gap: "16px",
		alignItems: "flex-start",
		marginBottom: "16px",
	},
	raciLetter: {
		fontSize: "32px",
		fontWeight: "700",
		color: tokens.colorBrandForeground1,
		lineHeight: "1",
		minWidth: "40px",
		textAlign: "center",
	},
});

export default PhaseB;
