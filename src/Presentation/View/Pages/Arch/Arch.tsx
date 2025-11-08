import bannerImage from "@/assets/Arch/Arch_Banner1x.jpg";
import type { SelectTabData, SelectTabEvent, TabValue } from "@fluentui/react-components";
import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	Card,
	CardHeader,
	LargeTitle,
	MessageBar,
	MessageBarBody,
	MessageBarTitle,
	// Popover,
	// PopoverSurface,
	// PopoverTrigger,
	Subtitle1,
	Subtitle2,
	Tab,
	TabList,
	Text,
	Title2,
} from "@fluentui/react-components";
import Hero from "@Presentation/View/Components/Hero";
import React, { useState } from "react";

function Arch(): React.JSX.Element {
	const [selectedTab, setSelectedTab] = useState<TabValue>("tab4");

	const onTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
		setSelectedTab(data.value);
	};

	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main>
				<Hero title="Arquitectura Empresarial" image={bannerImage} />

				<section className="container mb-4">
					<div className="mb-3">
						<LargeTitle as="h1" align="start" block>
							Arquitectura Empresarial - Marco TOGAF
						</LargeTitle>
					</div>

					<section className="mb-3">
						<Text as="p" size={400}>
							En ResqBit, adoptamos el Marco TOGAF (The Open Group Architecture Framework) para guiar nuestra
							arquitectura empresarial. TOGAF es un marco de trabajo estándar que proporciona un enfoque estructurado
							para diseñar, planificar, implementar y gestionar la arquitectura de una empresa, asegurando alineación
							con los objetivos estratégicos y facilitando la transformación digital.
						</Text>
					</section>

					<section className="mb-4">
						<TabList size="large" selectedValue={selectedTab} onTabSelect={onTabSelect}>
							<Tab value="tab1" disabled>
								Fase A
							</Tab>
							<Tab value="tab2" disabled>
								Fase B
							</Tab>
							<Tab value="tab3" disabled>
								Fase D
							</Tab>
							<Tab value="tab4">Fase E</Tab>
						</TabList>
					</section>

					<div className="mb-4">{selectedTab === "tab4" && <SectionE />}</div>
				</section>
			</main>
		</div>
	);
}

function SectionE() {
	// const classes = useStyles();

	return (
		<div>
			<div className="mb-4">
				<Title2 as="h2" className="mb-3" block>
					Oportunidades y Soluciones
				</Title2>
				<Text as="p" size={400}>
					En el contexto de ResqBit S.A.S - Consultoría para PYMEs en Tecnología (Explicar la Fase E)
				</Text>
			</div>

			<div className="row gx-2 gy-2 mb-4">
				<div className="col-12 col-lg-6">
					<Card appearance="outline" className="d-flex flex-column h-100">
						<CardHeader header={<Subtitle2 as="h3">Mapa o Técnicas de la Fase E</Subtitle2>} />

						<article className="flex-grow-1">
							<Text as="p" size={300} className="mb-3" block>
								En ResqBit, aplicamos un mapa detallado de técnicas para identificar y priorizar oportunidades en PYMEs
								como firmas de auditoría, enfocándonos en la entrega eficiente de arquitecturas.
							</Text>

							<Accordion collapsible>
								<AccordionItem value="1">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Análisis de Brechas (Gap Analysis)
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Compara la arquitectura baseline con la target para detectar discrepancias en dominios como
											negocio, datos, aplicaciones y tecnología. En ResqBit, usamos esto para mapear gaps en procesos de
											auditoría manuales vs. automatizados.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="2">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Gestión de Stakeholders
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Involucra a auditores, clientes PYME del sector tecnología y gerentes para alinear expectativas y
											recopilar inputs cualitativos/cuantitativos, asegurando que las soluciones sean viables y
											adoptables.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="3">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Desarrollo de Roadmap
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Crea itinerarios de implementación con work packages detallados, integrando milestones y
											dependencias para una transición fluida.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="4">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Priorización de Proyectos
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Emplea matrices de impacto-beneficio (e.g., MoSCoW o scoring models) para racionalizar iniciativas
											IT, priorizando aquellas con alto ROI en entornos PYME.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="5">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Consolidación de Requisitos
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Emplea matrices de impacto-beneficio (e.g., MoSCoW o scoring models) para racionalizar iniciativas
											Integra gaps de todos los dominios arquitectónicos (B, C, D) en un catálogo unificado, facilitando
											la definición de building blocks reutilizables.
										</div>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</article>

						<MessageBar shape="rounded" className="w-100">
							<MessageBarBody>
								<MessageBarTitle>Outputs clave</MessageBarTitle>
								Lista de oportunidades, work packages y matriz de racionalización.
							</MessageBarBody>
						</MessageBar>
					</Card>
				</div>

				{/* <div className="col-12 col-lg-6">
					<Card appearance="outline" className="d-flex flex-column h-100">
						<CardHeader header={<Subtitle2 as="h3">Principales Objetivos de la Fase E</Subtitle2>} />

						<article className="flex-grow-1">
							<Text as="p" size={300} className="mb-3" block>
								Objetivos clave en ResqBit para optimizar procesos en PYMEs tecnológicas, transitando de visiones
								abstractas a planes accionables.
							</Text>

							<Accordion collapsible>
								<AccordionItem value="1">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Identificar Vehículos de Entrega
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Definir proyectos y programas como delivery vehicles para la arquitectura target, agrupándolos en
											work packages que alineen con prioridades de negocio.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="2">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Crear Versión Inicial del Architecture Roadmap
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Basado en gaps identificados, desarrollar un roadmap preliminar con fases de implementación,
											recursos y timelines para guiar la evolución arquitectónica.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="3">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Definir Arquitecturas de Transición
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Establecer incrementos intermedios que puentéen baseline y target, minimizando disrupciones y
											maximizando valor temprano.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="4">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Racionalizar Actividades IT
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Analizar y consolidar iniciativas desde perspectivas de negocio y técnica, eliminando redundancias
											y alineando con requisitos empresariales.
										</div>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem value="5">
									<AccordionHeader>
										<Text as="h4" weight="semibold" className="m-0">
											Consolidar Gaps de Dominios
										</Text>
									</AccordionHeader>
									<AccordionPanel>
										<div>
											Integrar discrepancias de arquitectura de negocio (B), información (C) y tecnología (D) en un plan
											cohesivo.
										</div>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</article>

						<Popover size="small" withArrow>
							<PopoverTrigger>
								<MessageBar shape="rounded">
									<MessageBarBody>
										<MessageBarTitle>Beneficios</MessageBarTitle>
										Reducción de riesgos, aceleración de ROI y escalabilidad para PYMEs.
									</MessageBarBody>
								</MessageBar>
							</PopoverTrigger>

							<PopoverSurface style={{ maxWidth: "500px" }}>
								<Text as="span" size={300}>
									Alineado con capacidades de ResqBit: Auditoría ISO para cumplimiento, Gestión Documental para
									trazabilidad, Ciberseguridad para protección, BI para insights y Consultoría Sostenible para
									eficiencia remota.
								</Text>
							</PopoverSurface>
						</Popover>
					</Card>
				</div> */}
			</div>

			<div className="mb-5">
				<Subtitle1 as="h3" className="mb-3" block>
					Arquitecturas de Transición
				</Subtitle1>

				<div></div>
			</div>
		</div>
	);
}

// const useStyles = makeStyles({
// 	compact: {
// 		width: "600px",
// 	},
// 	resizableArea: {
// 		display: "flex",
// 		flexDirection: "column",
// 		padding: "30px 10px",
// 		gap: "10px",
// 		border: `2px solid ${tokens.colorBrandBackground}`,
// 		position: "relative",
// 		overflow: "hidden",

// 		"::after": {
// 			content: `'Resizable Area'`,
// 			position: "absolute",
// 			padding: "1px 4px 1px",
// 			top: "-2px",
// 			left: "-2px",
// 			fontFamily: "monospace",
// 			fontSize: "15px",
// 			fontWeight: 900,
// 			lineHeight: 1,
// 			letterSpacing: "1px",
// 			color: tokens.colorNeutralForegroundOnBrand,
// 			backgroundColor: tokens.colorBrandBackground,
// 		},
// 	},
// });

export default Arch;
