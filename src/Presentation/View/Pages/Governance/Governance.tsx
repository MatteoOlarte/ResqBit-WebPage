import Footer from "@/Presentation/View/Components/Footer";
import heroImage from "@/assets/Governance/leadership_banner.jpg";
import Hero from "@Presentation/View/Components/Hero";
import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	Body1,
	Card,
	CardHeader,
	Subtitle1,
	Subtitle2,
	Title3,
	makeStyles,
	tokens,
} from "@fluentui/react-components";
import {
	BuildingRetailRegular,
	CalendarAgendaRegular,
	CodeRegular,
	DataBarVerticalRegular,
	HeadsetRegular,
	MegaphoneRegular,
	MoneyRegular,
	PeopleRegular,
	PersonRegular,
	ScalesRegular,
	SettingsRegular,
	ShieldCheckmarkRegular,
} from "@fluentui/react-icons";
import React from "react";

function Governance(): React.JSX.Element {
	const classes = useStyles();

	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main style={{ marginBottom: "5rem" }}>
				<Hero title="Gobernanza" image={heroImage} />

				<section className="container mb-5">
					<div className="row mb-4">
						<div className="col-12">
							<Title3 className="mb-3" block>
								Estructura Organizacional
							</Title3>
							<Body1>
								Nuestra estructura de gobernanza está diseñada para garantizar la eficiencia operativa, el crecimiento
								sostenible y el cumplimiento de los más altos estándares de calidad.
							</Body1>
						</div>
					</div>

					{/* Director General */}
					<div className="row mb-4">
						<div className="col-12">
							<Card className={classes.directorCard}>
								<CardHeader
									image={<PersonRegular className={classes.iconGeneral} />}
									header={<Subtitle1 className={classes.cardTitle}>Director General</Subtitle1>}
								/>
								<div className="p-3">
									<Subtitle2 className="mb-2">Funciones:</Subtitle2>
									<ul className={classes.functionList}>
										<li>Definir la estrategia general y los objetivos corporativos.</li>
										<li>Supervisar y coordinar las áreas comercial, operativa y administrativa.</li>
										<li>Tomar decisiones clave sobre inversiones, expansión y políticas internas.</li>
										<li>Representar a la empresa ante clientes, socios e instituciones.</li>
										<li>Evaluar resultados globales y garantizar la rentabilidad y sostenibilidad.</li>
									</ul>
								</div>
							</Card>
						</div>
					</div>

					{/* Las tres direcciones principales */}
					<div className="row g-4 mb-4">
						{/* Director Comercial */}
						<div className="col-12 col-lg-4">
							<Card className={classes.cardCommercial}>
								<CardHeader
									image={<BuildingRetailRegular className={classes.iconCommercial} />}
									header={<Subtitle1 className={classes.cardTitle}>Director Comercial</Subtitle1>}
								/>
								<div className="p-3">
									<Subtitle2 className="mb-2">Funciones:</Subtitle2>
									<ul className={classes.functionList}>
										<li>Diseñar y ejecutar estrategias de ventas y marketing.</li>
										<li>Coordinar al equipo de asesores comerciales y servicio al cliente.</li>
										<li>Desarrollar políticas de precios y estrategias de posicionamiento.</li>
										<li>Gestionar relaciones con clientes y detectar nuevas oportunidades de negocio.</li>
										<li>Analizar el rendimiento comercial y reportar al Director General.</li>
									</ul>

									<div className="mt-3">
										<Accordion collapsible>
											<AccordionItem value="1">
												<AccordionHeader icon={<PersonRegular />}>Asesoría Comercial</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Identificar necesidades del cliente y ofrecer soluciones adecuadas.</li>
														<li>Elaborar propuestas y cotizaciones comerciales.</li>
														<li>Cerrar ventas y realizar seguimiento postventa.</li>
														<li>Mantener actualizada la base de datos de clientes.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="2">
												<AccordionHeader icon={<HeadsetRegular />}>Custom Service</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Atender consultas, quejas y solicitudes de los clientes.</li>
														<li>Asegurar altos niveles de satisfacción del cliente.</li>
														<li>Coordinar con otras áreas para resolver incidencias.</li>
														<li>Registrar y analizar métricas de servicio.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="3">
												<AccordionHeader icon={<MegaphoneRegular />}>Marketing</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Planificar campañas publicitarias y de promoción.</li>
														<li>Gestionar redes sociales, página web y contenido digital.</li>
														<li>Analizar el mercado y la competencia.</li>
														<li>Apoyar en el desarrollo de marca e imagen corporativa.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>
										</Accordion>
									</div>
								</div>
							</Card>
						</div>

						{/* Director de Operaciones */}
						<div className="col-12 col-lg-4">
							<Card className={classes.cardOperations}>
								<CardHeader
									image={<SettingsRegular className={classes.iconOperations} />}
									header={<Subtitle1 className={classes.cardTitle}>Director de Operaciones</Subtitle1>}
								/>
								<div className="p-3">
									<Subtitle2 className="mb-2">Funciones:</Subtitle2>
									<ul className={classes.functionList}>
										<li>Supervisar el desarrollo de proyectos y operaciones diarias.</li>
										<li>Garantizar la eficiencia de procesos y la seguridad de la información.</li>
										<li>Coordinar los equipos técnicos y de datos.</li>
										<li>Evaluar resultados operativos y proponer mejoras.</li>
									</ul>

									<div className="mt-3">
										<Accordion collapsible>
											<AccordionItem value="1">
												<AccordionHeader icon={<ScalesRegular />}>Auditor</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Evaluar procesos internos y cumplimiento de políticas.</li>
														<li>Detectar riesgos y proponer planes de mejora.</li>
														<li>Verificar controles financieros, operativos y tecnológicos.</li>
														<li>Elaborar informes de auditoría para la dirección.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="2">
												<AccordionHeader icon={<ShieldCheckmarkRegular />}>Seguridad de la Información</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Proteger los activos digitales de la empresa.</li>
														<li>Implementar políticas de ciberseguridad.</li>
														<li>Monitorear amenazas y gestionar incidentes.</li>
														<li>Asegurar el cumplimiento de normativas de protección de datos.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="3">
												<AccordionHeader icon={<CodeRegular />}>Desarrollo</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Diseñar, desarrollar y mantener sistemas y aplicaciones.</li>
														<li>Asegurar la funcionalidad, calidad y escalabilidad de soluciones tecnológicas.</li>
														<li>Colaborar con analítica de datos y proyectos para automatizar procesos.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="4">
												<AccordionHeader icon={<CalendarAgendaRegular />}>Coordinador de Proyectos</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Planificar, ejecutar y supervisar proyectos asignados.</li>
														<li>Gestionar recursos, tiempos y presupuestos.</li>
														<li>Coordinar entre departamentos para cumplir objetivos.</li>
														<li>Reportar avances al Director de Operaciones.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="5">
												<AccordionHeader icon={<DataBarVerticalRegular />}>Analítica de Datos</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Recopilar, procesar y analizar datos internos y externos.</li>
														<li>Generar reportes para la toma de decisiones estratégicas.</li>
														<li>Desarrollar indicadores clave (KPIs) y paneles de control (dashboards).</li>
														<li>Apoyar a las áreas comercial y de operaciones con información útil.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>
										</Accordion>
									</div>
								</div>
							</Card>
						</div>

						{/* Director de Administración y Finanzas */}
						<div className="col-12 col-lg-4">
							<Card className={classes.cardAdmin}>
								<CardHeader
									image={<MoneyRegular className={classes.iconAdmin} />}
									header={<Subtitle1 className={classes.cardTitle}>Director de Administración y Finanzas</Subtitle1>}
								/>
								<div className="p-3">
									<Subtitle2 className="mb-2">Funciones:</Subtitle2>
									<ul className={classes.functionList}>
										<li>Gestionar los recursos financieros, humanos y legales.</li>
										<li>Elaborar presupuestos, estados financieros y proyecciones.</li>
										<li>Asegurar el cumplimiento fiscal y normativo.</li>
										<li>Optimizar el uso de recursos de la empresa.</li>
									</ul>

									<div className="mt-3">
										<Accordion collapsible>
											<AccordionItem value="1">
												<AccordionHeader icon={<PeopleRegular />}>Recursos Humanos (RRHH)</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Reclutamiento, selección y capacitación del personal.</li>
														<li>Diseñar políticas de compensaciones y beneficios.</li>
														<li>Gestionar el clima laboral y la cultura organizacional.</li>
														<li>Controlar asistencia, nóminas y evaluaciones de desempeño.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>

											<AccordionItem value="2">
												<AccordionHeader icon={<ScalesRegular />}>Legal</AccordionHeader>
												<AccordionPanel>
													<ul className={classes.functionList}>
														<li>Asesorar en temas legales, contractuales y regulatorios.</li>
														<li>Redactar y revisar contratos y convenios.</li>
														<li>Representar a la empresa ante entidades legales o judiciales.</li>
														<li>Asegurar el cumplimiento de la legislación vigente.</li>
													</ul>
												</AccordionPanel>
											</AccordionItem>
										</Accordion>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

const useStyles = makeStyles({
	directorCard: {
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow16,
	},
	cardCommercial: {
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow16,
		height: "100%",
	},
	cardOperations: {
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow16,
		height: "100%",
	},
	cardAdmin: {
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow16,
		height: "100%",
	},
	iconGeneral: {
		fontSize: "34px",
		color: tokens.colorNeutralForegroundInverted,
		backgroundColor: tokens.colorPaletteMarigoldBackground3,
		padding: "4px",
		borderRadius: "4px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	iconCommercial: {
		fontSize: "34px",
		color: tokens.colorNeutralForegroundInverted,
		backgroundColor: tokens.colorPaletteGreenBorder2,
		padding: "4px",
		borderRadius: "4px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	iconOperations: {
		fontSize: "34px",
		color: tokens.colorNeutralForegroundInverted,
		backgroundColor: tokens.colorPaletteRedBorder2,
		padding: "4px",
		borderRadius: "4px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	iconAdmin: {
		fontSize: "34px",
		color: tokens.colorNeutralForegroundInverted,
		backgroundColor: tokens.colorBrandStroke1,
		padding: "4px",
		borderRadius: "4px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	cardTitle: {
		fontWeight: "600",
	},
	functionList: {
		margin: 0,
		paddingLeft: "1.25rem",
		"& li": {
			marginBottom: "0.5rem",
			lineHeight: "1.5",
		},
	},
});

export default Governance;
