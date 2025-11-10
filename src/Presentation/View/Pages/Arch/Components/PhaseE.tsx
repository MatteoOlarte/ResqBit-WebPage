import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	Card,
	CardHeader,
	MessageBar,
	MessageBarBody,
	MessageBarTitle,
	// Popover,
	// PopoverSurface,
	// PopoverTrigger,
	Subtitle2,
	Text,
	Title2,
} from "@fluentui/react-components";

function PhaseE() {
	// const classes = useStyles();

	return (
		<div>
			<div className="mb-4">
				<Title2 as="h2" className="mb-3" block>
					Oportunidades y Soluciones
				</Title2>
				<Text as="p" size={400}>
					En el contexto de ResqBit S.A.S, presentamos el plan de costos global para la transición arquitectónica en la
					Fase E de TOGAF, incluyendo diagnósticos, planeación, evaluación y consolidación.
				</Text>
			</div>

			<div className="row gx-2 gy-2 mb-4">
				<div className="col-12 col-lg-4">
					<Card appearance="outline" className="d-flex flex-column h-100">
						<CardHeader
							header={<Subtitle2 as="h3">Plan de Costos Global – Mapa de Transición Arquitectónica</Subtitle2>}
						/>

						<article className="flex-grow-1" style={{ overflowY: "auto", maxHeight: "500px" }}>
							<Text as="p" size={300} className="mb-3" block>
								El siguiente plan detalla las actividades, objetivos y costos estimados para la transición
								arquitectónica en PYMEs tecnológicas.
							</Text>

							<Accordion collapsible>
								<AccordionItem value="1">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Diagnóstico y Análisis Inicial
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Incluye: Análisis de brechas y primera parte de arquitecturas de transición. Objetivo: Entender el
											estado actual y definir las etapas intermedias hacia el objetivo final. Actividades: Revisión,
											entrevistas, modelado inicial. Costo estimado: $9,000 USD
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="2">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Planeación de Transición y Dependencias
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Incluye: Segunda parte de arquitecturas de transición y matriz de dependencias. Objetivo:
											Establecer relaciones entre proyectos, dependencias y prioridades. Actividades: Identificación de
											dependencias, creación de matriz, validación técnica. Costo estimado: $6,000 USD
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="3">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Evaluación de Implementación y Valor
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Incluye: Evaluación de implementación y evaluación de impacto y valor. Objetivo: Planificar el
											orden, responsables y tiempos; medir el valor, costo y riesgo de cada iniciativa. Actividades:
											Plan maestro, análisis de ROI/TCO, gestión de riesgos. Costo estimado: $9,600 USD
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="4">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Consolidación y Paquetes de Trabajo
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Incluye: Paquetes de trabajo y documentación final. Objetivo: Agrupar proyectos por afinidad,
											establecer entregables y plan de ejecución. Actividades: Definición de lotes, documentación y
											cierre del plan de transición. Costo estimado: $2,700 USD
										</div>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</article>

						<MessageBar shape="rounded" className="w-100">
							<MessageBarBody>
								<MessageBarTitle>Total Global Estimado</MessageBarTitle>
								$27,300 USD
							</MessageBarBody>
						</MessageBar>
					</Card>
				</div>

				<div className="col-12 col-lg-4">
					<Card appearance="outline" className="d-flex flex-column h-100">
						<CardHeader
							header={
								<Subtitle2 as="h3">Principales Incertidumbres en una Transformación Digital de Auditoría</Subtitle2>
							}
						/>

						<article className="flex-grow-1" style={{ overflowY: "auto", maxHeight: "500px" }}>
							<Text as="p" size={300} className="mb-3" block>
								Las siguientes incertidumbres deben ser consideradas en la transformación digital de auditoría.
							</Text>

							<Accordion collapsible>
								<AccordionItem value="1">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Incertidumbre Tecnológica
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											<strong>Qué es:</strong> Dudas sobre qué tecnologías serán sostenibles, seguras y rentables a
											largo plazo (por ejemplo, IA, automatización, blockchain o análisis predictivo).
											<br />
											<strong>Cómo afrontarla:</strong>
											<ul>
												<li>Realizar prototipos y pruebas piloto antes de escalar.</li>
												<li>
													Adoptar un enfoque modular y flexible (arquitectura orientada a servicios o microservicios).
												</li>
												<li>Usar marcos de referencia reconocidos (TOGAF, COBIT, ITIL).</li>
												<li>Evaluar proveedores con criterios de madurez tecnológica y soporte futuro.</li>
											</ul>
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="2">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Incertidumbre en el Retorno de la Inversión (ROI)
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											<strong>Qué es:</strong> Dificultad para medir si la automatización realmente reducirá costos,
											aumentará la calidad o atraerá más clientes.
											<br />
											<strong>Cómo afrontarla:</strong>
											<ul>
												<li>
													Definir KPIs claros (eficiencia de revisión, tiempo por auditoría, errores detectados,
													satisfacción del cliente).
												</li>
												<li>Implementar fases iterativas (quick wins) para validar beneficios tangibles.</li>
												<li>Realizar análisis de costo-beneficio continuo (ROI, TCO).</li>
												<li>Crear un comité de valor que supervise resultados cada trimestre.</li>
											</ul>
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="3">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Incertidumbre Cultural y Humana
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											<strong>Qué es:</strong> Incertidumbre sobre cómo reaccionará el personal ante la automatización
											(temor, resistencia o pérdida de control).
											<br />
											<strong>Cómo afrontarla:</strong>
											<ul>
												<li>
													Diseñar una estrategia de gestión del cambio (capacitación, comunicación y acompañamiento).
												</li>
												<li>Involucrar al personal desde el inicio en pruebas piloto.</li>
												<li>Crear embajadores digitales (líderes internos que impulsen el cambio).</li>
												<li>Mostrar beneficios personales: menos tareas repetitivas, más análisis estratégico.</li>
											</ul>
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="4">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Incertidumbre Regulatoria y Ética
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											<strong>Qué es:</strong> Dudas sobre si las tecnologías automatizadas cumplen con las normativas
											contables, fiscales, de datos o de confidencialidad.
											<br />
											<strong>Cómo afrontarla:</strong>
											<ul>
												<li>
													Consultar con expertos legales y reguladores antes de implementar sistemas automatizados.
												</li>
												<li>Mantener auditorías paralelas (manual y digital) durante el periodo de transición.</li>
												<li>Implementar políticas de gobernanza de datos y ética algorítmica.</li>
												<li>Alinear el proceso con estándares como ISO 27001, ISAE 3402, GDPR.</li>
											</ul>
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="5">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Incertidumbre del Cliente o del Mercado
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											<strong>Qué es:</strong> No saber si los clientes confiarán en auditorías más digitalizadas o
											automatizadas.
											<br />
											<strong>Cómo afrontarla:</strong>
											<ul>
												<li>Educar al cliente sobre la fiabilidad y trazabilidad de los procesos digitales.</li>
												<li>Asegurar transparencia: mostrar cómo se generan los resultados automatizados.</li>
												<li>Ofrecer servicios híbridos (digital + revisión humana) durante el periodo de adopción.</li>
												<li>Destacar la mayor rapidez y precisión como ventaja competitiva.</li>
											</ul>
										</div>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</article>
					</Card>
				</div>

				<div className="col-12 col-lg-4">
					<Card appearance="outline" className="d-flex flex-column h-100">
						<CardHeader header={<Subtitle2 as="h3">Obstáculos en la Transformación Digital</Subtitle2>} />

						<article className="flex-grow-1" style={{ overflowY: "auto", maxHeight: "500px" }}>
							<Text as="p" size={300} className="mb-3" block>
								Principales obstáculos tecnológicos, organizacionales, de procesos y regulatorios.
							</Text>

							<Accordion collapsible>
								<AccordionItem value="1">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Obstáculos Tecnológicos
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<ul>
											<li>
												Infraestructura obsoleta: Sistemas heredados (legacy) que no son compatibles con nuevas
												plataformas digitales.
											</li>
											<li>
												Integración de sistemas: Dificultades para conectar herramientas de auditoría tradicionales con
												nuevas tecnologías (IA, RPA, analítica de datos, blockchain, etc.).
											</li>
											<li>
												Falta de estándares o automatización previa: Procesos aún manuales que requieren rediseño antes
												de ser digitalizados.
											</li>
											<li>
												Ciberseguridad y protección de datos: Riesgos asociados al manejo de información confidencial de
												clientes en entornos digitales o en la nube.
											</li>
											<li>
												Costos iniciales altos: Inversión significativa en licencias, infraestructura, migración de
												datos y consultoría tecnológica.
											</li>
										</ul>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="2">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Obstáculos Organizacionales y Culturales
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<ul>
											<li>
												Resistencia al cambio: Personal acostumbrado a metodologías tradicionales y temor a perder
												relevancia frente a la automatización.
											</li>
											<li>
												Falta de liderazgo digital: Directivos que no impulsan activamente la adopción tecnológica o
												carecen de visión digital clara.
											</li>
											<li>
												Falta de competencias digitales: Carencia de habilidades en análisis de datos, uso de
												herramientas de automatización y gestión de proyectos tecnológicos.
											</li>
											<li>
												Desalineación interna: Áreas de auditoría, TI y operaciones trabajando de forma aislada o con
												objetivos distintos.
											</li>
										</ul>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="3">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Obstáculos de Procesos y Gobernanza
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<ul>
											<li>
												Procesos no estandarizados: Variabilidad en la forma de ejecutar auditorías entre equipos o
												sucursales, dificultando la automatización.
											</li>
											<li>
												Falta de un marco de transformación claro: Ausencia de una hoja de ruta (roadmap) o gobierno del
												cambio digital.
											</li>
											<li>
												Gestión inadecuada del cambio: No se comunica adecuadamente la visión, beneficios ni fases del
												proceso al personal.
											</li>
											<li>
												Dependencia de terceros: Proveedores de software o consultores que imponen sus ritmos o
												soluciones poco adaptadas al negocio.
											</li>
										</ul>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="4">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Obstáculos Regulatorios y de Confianza
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<ul>
											<li>
												Cumplimiento normativo: Dificultad para adaptar procesos automatizados a regulaciones contables,
												fiscales y de confidencialidad.
											</li>
											<li>
												Auditorías digitales no reconocidas: Los entes reguladores pueden exigir métodos tradicionales
												de validación.
											</li>
											<li>
												Riesgo reputacional: Si una automatización falla (por error de datos o interpretación), puede
												afectar la confianza de los clientes.
											</li>
										</ul>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</article>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default PhaseE;
