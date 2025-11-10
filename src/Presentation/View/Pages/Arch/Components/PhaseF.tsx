import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	Card,
	CardHeader,
	Subtitle1,
	Subtitle2,
	Text,
} from "@fluentui/react-components";

function PhaseF() {
	return (
		<div>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Migration Planing
				</Subtitle1>
				<Text as="p" size={400}>
					El plan de migración establece la hoja de ruta para alcanzar el estado objetivo de arquitectura empresarial.
				</Text>
			</div>

			<div className="row gx-2 gy-2 mb-4">
				<div className="col-12">
					<Card appearance="outline" className="d-flex flex-column h-100">
						<CardHeader header={<Subtitle2 as="h3">Etapas principales</Subtitle2>} />

						<article className="flex-grow-1" style={{ overflowY: "auto", maxHeight: "500px" }}>
							<Accordion collapsible>
								<AccordionItem value="1">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Implementación base (Fase 1)
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Despliegue de CRM y Jira para gestión de clientes y proyectos. Configuración inicial de SharePoint
											para documentación de auditorías.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="2">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Integración de inteligencia (Fase 2)
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Integración de Power BI con datos del CRM y del Service Desk. Creación de dashboards para reportes
											automáticos de auditoría.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="3">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Fortalecimiento de seguridad (Fase 3)
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Implementación de SIEM y herramientas de gestión de vulnerabilidades. Establecimiento de monitoreo
											continuo y alertas automatizadas.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="4">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Automatización y optimización (Fase 4)
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Integración de flujos automatizados (Power Automate o scripts Python). Consolidación del
											ecosistema en la nube Azure con MFA y políticas centralizadas.
										</div>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</article>
					</Card>
				</div>
			</div>

			<div className="mb-4">
				<Text as="p" size={400} block>
					Cada fase contempla pruebas, capacitación del personal, control de cambios y revisión de cumplimiento. El
					éxito del plan se mide con KPIs como reducción de tiempos de auditoría, aumento de satisfacción del cliente y
					mejora en los indicadores de seguridad.
				</Text>
			</div>
		</div>
	);
}

export default PhaseF;
