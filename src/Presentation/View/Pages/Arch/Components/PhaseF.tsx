import {
	Body1Strong,
	Subtitle1,
	Subtitle2,
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableRow,
	Text,
} from "@fluentui/react-components";

function PhaseF() {
	return (
		<div>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Migration Planing
				</Subtitle1>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Principios de Implementación
				</Subtitle2>

				<ol>
					<li className="mb-2">
						<Text as="span" size={400}>
							<strong>No interrumpir la operación:</strong> todo cambio se realiza en paralelo a las actividades
							normales.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							<strong>Iterar y validar antes de escalar:</strong> cada componente se prueba en un entorno acotado antes
							de extenderse al resto.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							<strong>Documentar para transferir conocimiento:</strong> toda configuración debe quedar registrada para
							asegurar continuidad.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							<strong>Automatización progresiva:</strong> primero tareas simples y repetitivas, luego procesos de mayor
							impacto.
						</Text>
					</li>
					<li className="mb-2">
						<Text as="span" size={400}>
							<strong>Mejora continua basada en evidencia:</strong> decisiones guiadas por métricas de operación y
							seguridad.
						</Text>
					</li>
				</ol>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Secuencia de Migración
				</Subtitle2>

				<div className="table-responsive">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Oleada</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Periodo</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Enfoque</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Resultado esperado</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Oleada 1</TableCell>
								<TableCell>Meses 0–3</TableCell>
								<TableCell>Organización y control documental</TableCell>
								<TableCell>Estructura documental formalizada y permisos por rol establecidos</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Oleada 2</TableCell>
								<TableCell>Meses 4–6</TableCell>
								<TableCell>Primeras automatizaciones</TableCell>
								<TableCell>Workflows básicos activos y checklist unificado en uso</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Oleada 3</TableCell>
								<TableCell>Meses 6–9</TableCell>
								<TableCell>Integración de sistemas</TableCell>
								<TableCell>CRM ↔ Jira ↔ SharePoint sincronizados</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Oleada 4</TableCell>
								<TableCell>Meses 9–12</TableCell>
								<TableCell>Automatización analítica</TableCell>
								<TableCell>Power BI actualizado sin manipulación manual</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Oleada 5</TableCell>
								<TableCell>Meses 12–18</TableCell>
								<TableCell>Seguridad avanzada</TableCell>
								<TableCell>SIEM con reglas de correlación aplicadas</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Oleada 6</TableCell>
								<TableCell>Meses 18–24</TableCell>
								<TableCell>Escalabilidad y continuidad</TableCell>
								<TableCell>Monitoreo continuo + plan de mejora continua activo</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					RACI de Implementación
				</Subtitle2>

				<div className="table-responsive">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Rol</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Responsabilidad</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>Director General</TableCell>
								<TableCell>A – Aprueba y supervisa el avance estratégico.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Director de Operaciones</TableCell>
								<TableCell>R – Lidera la implementación técnica y asegura cumplimiento.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Coordinador de Proyectos</TableCell>
								<TableCell>C – Coordina dependencias, cronogramas y recursos.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Equipo de BI / Analítica</TableCell>
								<TableCell>R/C – Modela datos, automatiza reportes y valida integridad.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Equipo de Seguridad de la Información</TableCell>
								<TableCell>R/C/I – Ajusta SIEM, gestiona vulnerabilidades y activa incidentes.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Dirección Administrativa y Financiera</TableCell>
								<TableCell>I – Se informa para efectos presupuestales y auditorías.</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Indicadores de Éxito (KPIs de Control de Migración)
				</Subtitle2>

				<div className="table-responsive">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderCell>
									<Body1Strong>Indicador</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Meta</Body1Strong>
								</TableHeaderCell>
								<TableHeaderCell>
									<Body1Strong>Evidencia</Body1Strong>
								</TableHeaderCell>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>% de documentación estandarizada</TableCell>
								<TableCell>≥ 90%</TableCell>
								<TableCell>Repositorio SharePoint auditado</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>% de reportes automatizados</TableCell>
								<TableCell>≥ 80%</TableCell>
								<TableCell>Power BI sin modificaciones manuales</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Tiempo promedio de preparación de entregables</TableCell>
								<TableCell>↓ 30%</TableCell>
								<TableCell>Comparativo antes/después</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Incidentes sin trazabilidad</TableCell>
								<TableCell>0</TableCell>
								<TableCell>Log SIEM + registros de recuperación</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Adopción de uso de flujos automatizados</TableCell>
								<TableCell>≥ 75% del equipo</TableCell>
								<TableCell>Métricas Power Automate / n8n</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 as="h3" className="mb-3" block>
					Gestión del Cambio Organizacional
				</Subtitle2>
				<Text as="p" size={400} className="mb-3" block>
					La gestión del cambio organizacional se orienta a asegurar la adopción progresiva de las nuevas prácticas y
					herramientas. Para ello, la capacitación se realiza de manera gradual y aplicada a actividades reales,
					permitiendo que el aprendizaje se incorpore directamente en la operación. Al finalizar cada oleada de
					implementación se desarrollan sesiones de transferencia de conocimiento, donde se documentan ajustes y se
					fortalecen las competencias del equipo. Durante las primeras semanas de uso se ofrece acompañamiento interno
					para resolver dudas y garantizar estabilidad. Finalmente, se presentan comparativos antes/después que
					evidencian la reducción de tiempos, la disminución de reprocesos y la mejora en la trazabilidad, reforzando la
					motivación y la sostenibilidad del cambio.
				</Text>
			</div>
		</div>
	);
}

export default PhaseF;
