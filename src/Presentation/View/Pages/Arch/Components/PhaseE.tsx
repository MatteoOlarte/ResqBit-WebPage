import {
	Body1Strong,
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
import KeyActivityItem from "@Presentation/View/Components/KeyActivityItem";
import image from "@/assets/Arch/Picture2.jpg";

const useStyles = makeStyles({
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: tokens.spacingVerticalXXL,
	},
	image: {
		aspectRatio: "19/6",
		maxWidth: "100%",
		width: "100%",
		height: "auto",
		objectFit: "cover",
		borderRadius: tokens.borderRadiusMedium,
		boxShadow: tokens.shadow8,
	},
});

function PhaseE() {
	const classes = useStyles();

	return (
		<div>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Oportunidades y Soluciones
				</Subtitle1>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Oportunidades Identificadas
				</Subtitle2>
				<Text as="p" size={400} className="mb-3" block>
					En el análisis realizado durante las fases B, C y D se identificaron oportunidades que permitirán aumentar la
					eficiencia sin ampliar la carga operativa:
				</Text>

				<div className="row gx-2 gy-2 mb-3">
					<div className="col-12">
						<KeyActivityItem
							index={1}
							force={{
								title: "Integración de Sistemas",
								desc: [
									"Integrar CRM, Jira y SharePoint para reducir duplicidad de registros y reprocesos en la gestión de clientes y proyectos.",
								],
							}}
						/>
					</div>
					<div className="col-12">
						<KeyActivityItem
							index={2}
							force={{
								title: "Automatización de Reportes",
								desc: [
									"Automatizar la consolidación de datos en Power BI para minimizar manipulación manual en informes y reportes.",
								],
							}}
						/>
					</div>
					<div className="col-12">
						<KeyActivityItem
							index={3}
							force={{
								title: "Gestión Documental",
								desc: [
									"Formalizar flujos de envío y versión de evidencias en SharePoint, garantizando trazabilidad y consistencia documental.",
								],
							}}
						/>
					</div>
					<div className="col-12">
						<KeyActivityItem
							index={4}
							force={{
								title: "Automatización Operativa",
								desc: [
									"Implementar flujos automatizados de notificaciones y seguimiento, reduciendo dependencia del monitoreo manual.",
								],
							}}
						/>
					</div>
					<div className="col-12">
						<KeyActivityItem
							index={5}
							force={{
								title: "Fortalecimiento SIEM",
								desc: ["Fortalecer el uso del SIEM para alertas tempranas y gestión coordinada de incidentes."],
							}}
						/>
					</div>
				</div>

				<Text as="p" size={400} className="mb-4" block>
					Estas oportunidades tienen impacto directo en reducción de tiempos, claridad operativa y escalabilidad en
					servicios de auditoría, BI y ciberseguridad.
				</Text>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Soluciones Propuestas
				</Subtitle2>

				<div className="table-responsive">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Solución</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Descripción</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Impacto esperado</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Integración CRM / Jira / SharePoint</TableCell>
								<TableCell>Sincronización automática de clientes, proyectos y entregables</TableCell>
								<TableCell>Menos reprocesos y mayor trazabilidad</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Automatización de cargas y reportes Power BI</TableCell>
								<TableCell>Uso de Dataflows + actualizaciones programadas</TableCell>
								<TableCell>Informes disponibles sin intervención manual</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Modelo formal de gestión documental</TableCell>
								<TableCell>Estructura de repositorio + permisos + nomenclatura + control de versiones</TableCell>
								<TableCell>Evidencias organizadas y auditables</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Automatización operativa (Power Automate / n8n)</TableCell>
								<TableCell>Recordatorios, seguimiento de tareas, avisos de vencimientos</TableCell>
								<TableCell>Menos carga repetitiva y mayor consistencia</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fortalecimiento de monitoreo SIEM</TableCell>
								<TableCell>Ajuste de reglas, dashboards y alertas</TableCell>
								<TableCell>Respuesta oportuna y reducción de riesgo</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Estimación de Costos (USD)
				</Subtitle2>
				<Text as="p" size={400} className="mb-3" block>
					Los costos se enfocan en horas de servicio, capacitación y configuración, dado que la infraestructura y las
					licencias principales ya existen.
				</Text>

				<div className="table-responsive">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Rubro</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Alcance</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Costo Estimado (USD)</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Integración CRM ↔ Jira ↔ SharePoint</TableCell>
								<TableCell>Configuración y flujos automatizados</TableCell>
								<TableCell>$600 – $1,200</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Automatización Power BI (Dataflows / DWH Lite)</TableCell>
								<TableCell>ETL, modelado y actualización automática</TableCell>
								<TableCell>$400 – $900</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Formalización del Repositorio de Evidencias</TableCell>
								<TableCell>Plantillas + control de versiones + permisos</TableCell>
								<TableCell>$200 – $600</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Automatización operativa (Power Automate / n8n)</TableCell>
								<TableCell>Recordatorios + aprobaciones + notificaciones</TableCell>
								<TableCell>$300 – $700</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fortalecimiento SIEM (Wazuh / Splunk Lightweight)</TableCell>
								<TableCell>Reglas de alerta + tableros y correlación</TableCell>
								<TableCell>$500 – $1,000</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Roadmap de Implementación
				</Subtitle2>

				<div className="table-responsive">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Horizonte</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Periodo</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Enfoque</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Entregables Clave</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Corto Plazo (0–6 meses)</TableCell>
								<TableCell>Organización y estandarización</TableCell>
								<TableCell>Consolidar control documental y primeras automatizaciones</TableCell>
								<TableCell>
									- Manual de estructura documental en SharePoint
									<br />
									- Matriz de permisos y accesos por rol
									<br />
									- Plantillas estandarizadas de informes, hallazgos y actas
									<br />
									- Checklist operativo para auditorías y proyectos
									<br />- Primer flujo automatizado (notificaciones / vencimientos)
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Mediano Plazo (6–12 meses)</TableCell>
								<TableCell>Integración y sincronización</TableCell>
								<TableCell>Reducir reprocesos y manipulación manual de datos</TableCell>
								<TableCell>
									- Integración CRM ↔ Jira ↔ SharePoint activa
									<br />
									- Dataflows configurados y actualización automática de Power BI
									<br />
									- Tableros ejecutivos con KPIs de clientes y proyectos
									<br />
									- Procedimiento formal de carga y validación de datos
									<br />- Automatización de actos administrativos y planes de mejora
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Largo Plazo (12–24 meses)</TableCell>
								<TableCell>Escalabilidad y maduración</TableCell>
								<TableCell>Seguridad continua y operación eficiente en crecimiento</TableCell>
								<TableCell>
									- Reglas de correlación y alertas configuradas en SIEM
									<br />
									- Panel de monitoreo de vulnerabilidades en operación
									<br />
									- Procedimiento formal de respuesta a incidentes (CSIRT-lite)
									<br />
									- Capacitación interna en operación segura y uso de SIEM
									<br />- Informe de madurez tecnológica + plan de mejora continua
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>

			<div className={classes.imageContainer}>
				<img
					src={image}
					alt="Roadmap de Implementación"
					className={classes.image}
				/>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Gestión de la Incertidumbre y el Riesgo
				</Subtitle2>
				<Text as="p" size={400} className="mb-3" block>
					La ejecución de la arquitectura propuesta se encuentra sujeta a fuentes naturales de incertidumbre asociadas a
					la adopción de nuevas prácticas organizacionales, la variabilidad en los niveles de madurez digital de los
					clientes atendidos y la evolución permanente de los estándares de cumplimiento y seguridad. Para mitigar estos
					elementos, se adopta un enfoque de implementación progresiva, donde cada fase se estructura de manera
					secuencial y dependiente del grado de consolidación alcanzado en la anterior. La estandarización temprana de
					la documentación y de los procedimientos operativos reduce la dependencia del conocimiento tácito y favorece
					la replicabilidad de los procesos, lo que disminuye la variabilidad en los resultados.
				</Text>
				<Text as="p" size={400} className="mb-3" block>
					Asimismo, la capacitación se plantea bajo un modelo de transferencia gradual de competencias, en el cual el
					aprendizaje se produce en contexto, durante la ejecución de actividades reales, fortaleciendo la apropiación
					práctica y la sostenibilidad del cambio. La incorporación de herramientas de monitoreo continuo, como el SIEM
					y los dashboards de vulnerabilidades, permite la identificación temprana de desviaciones, incidentes y
					brechas, facilitando la activación de protocolos de respuesta coordinada antes de que los riesgos escalen en
					impacto. Finalmente, el cierre del ciclo se consolida mediante la evaluación periódica de la madurez
					tecnológica y la actualización del plan de mejora continua, asegurando que la arquitectura se mantenga
					adaptable frente a transformaciones del entorno y las necesidades del mercado.
				</Text>
			</div>
		</div>
	);
}

export default PhaseE;
