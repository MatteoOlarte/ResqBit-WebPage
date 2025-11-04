import heroImage from "@/assets/SIG/Hero-ISO-9001.png";
import type { SelectTabData, SelectTabEvent, TabValue } from "@fluentui/react-components";
import {
	Button,
	Card,
	CardHeader,
	Divider,
	List,
	ListItem,
	Popover,
	PopoverSurface,
	PopoverTrigger,
	Subtitle2,
	Text,
	Title1,
} from "@fluentui/react-components";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import Footer from "@Presentation/View/Components/Footer";
import Hero from "@Presentation/View/Components/Hero";
import { useState } from "react";

function SIG(): React.JSX.Element {
	// const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState<TabValue>("tab1");

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
				<Hero title="Normativa ISO" image={heroImage} />

				<section className="container mb-4">
					<Title1 as="h2" align="start" block>
						Normativa ISO
					</Title1>

					<Text as="p" size={400} style={{ marginBottom: "2rem" }}>
						En ResqBit, entendemos que la gestión eficaz de la seguridad de la información es crucial para la excelencia
						operativa y el cumplimiento normativo. Nuestro Sistema Integrado de Gestión (SIG) se basa en la normativa
						ISO y en procesos claros y auditables.
					</Text>
				</section>

				<section className="container mb-4">
					<Title1 as="h2" align="start" className="mb-3" block>
						Mapa de Procesos
					</Title1>

					<Section1 />
				</section>
			</main>

			<Footer />
		</div>
	);
}

function Section1() {
	const ListItem_ = ({ title, children }: { title: string; children: React.ReactNode }) => {
		return (
			<ListItem>
				<Popover withArrow>
					<PopoverTrigger>
						<div className="d-flex flex-row justify-content-between align-items-center py-2 px-3 m-0">
							<Text as="h3" size={300} className="m-0">
								{title}
							</Text>

							<Button icon={<MoreHorizontalRegular />} size="small" appearance="subtle" />
						</div>
					</PopoverTrigger>

					<PopoverSurface>
						<div>
							<Text as="h3" size={300} weight="semibold" className="mb-3" block>
								{title}
							</Text>

							{children}
						</div>
					</PopoverSurface>
				</Popover>
			</ListItem>
		);
	};

	return (
		<section className="row gy-4">
			<div className="col-12 col-lg-6">
				<Card appearance="outline" className="h-100">
					<CardHeader header={<Subtitle2 as="h2">Procesos Estratégicos</Subtitle2>} />

					<article>
						<List>
							<ListItem_ title="Planificación Estratégica">
								<ul>
									<li>Análisis DOFA (Contexto de la organización).</li>
									<li>Definición de objetivos de calidad, medio ambiente y SST.</li>
									<li>Establecimiento de políticas corporativas.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión de Riesgos y Oportunidades">
								<ul>
									<li>Identificación de amenazas y oportunidades.</li>
									<li>Evaluación de cambios normativos y tecnológicos.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión de Partes Interesadas">
								<ul>
									<li>Identificación y análisis de necesidades.</li>
									<li>Comunicación y reporte a clientes, reguladores y socios.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Revisión por la Dirección">
								<ul>
									<li>Evaluación del desempeño del SIG.</li>
									<li>Toma de decisiones correctivas y de mejora.</li>
								</ul>
							</ListItem_>
						</List>
					</article>
				</Card>
			</div>

			<div className="col-12 col-lg-6">
				<Card appearance="outline" className="h-100">
					<CardHeader header={<Subtitle2 as="h2">Procesos Misionales (Clave)</Subtitle2>} />

					<article>
						<List>
							<ListItem_ title="Auditoría y Diagnóstico">
								<ul>
									<li>Auditorías internas y externas (ISO 9001, 14001, 27001, 45001).</li>
									<li>Evaluación de vulnerabilidades (OpenVAS, Nessus).</li>
									<li>Pruebas de RedTeam, OWISAM e ingeniería social.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Consultoría y Asesoría">
								<ul>
									<li>Implementación de sistemas de gestión.</li>
									<li>Planes de mejora continua.</li>
									<li>Transformación digital y cumplimiento normativo.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Desarrollo de Soluciones BI">
								<ul>
									<li>Modelado y validación de datos.</li>
									<li>Creación de tableros en Power BI.</li>
									<li>Capacitación y soporte post-implementación.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Certificación ISO">
								<ul>
									<li>Preparación para auditorías externas.</li>
									<li>Seguimiento de no conformidades.</li>
									<li>Emisión de reportes ejecutivos.</li>
								</ul>
							</ListItem_>
						</List>
					</article>
				</Card>
			</div>

			<div className="col-12">
				<Card appearance="outline">
					<CardHeader header={<Subtitle2 as="h2">Procesos de Apoyo</Subtitle2>} />

					<article>
						<List>
							<ListItem_ title="Gestión de Recursos Humanos">
								<ul>
									<li>Reclutamiento y selección.</li>
									<li>Capacitación en normas ISO, seguridad y herramientas digitales.</li>
									<li>Evaluación del desempeño y bienestar laboral.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión Tecnológica y de Infraestructura">
								<ul>
									<li>Administración de plataformas en la nube (Azure/AWS).</li>
									<li>Mantenimiento de equipos y software.</li>
									<li>Soporte técnico y gestión de incidentes TI.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión Documental">
								<ul>
									<li>Control de documentos y registros (SharePoint/Github).</li>
									<li>Versiones y cifrado de informes.</li>
									<li>Respaldo y recuperación de información.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión Comercial y Marketing">
								<ul>
									<li>Prospección y fidelización de clientes.</li>
									<li>Estrategias de marketing digital (redes sociales, ads).</li>
									<li>Alianzas estratégicas y networking.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión Financiera y Administrativa">
								<ul>
									<li>Contabilidad y facturación (Helisa).</li>
									<li>Presupuestos y control de gastos.</li>
									<li>Gestión de proveedores y contratos.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión de la Seguridad de la Información">
								<ul>
									<li>Protección de activos de información.</li>
									<li>Políticas de acceso y cifrado.</li>
									<li>Auditorías internas de ciberseguridad.</li>
								</ul>
							</ListItem_>

							<Divider />

							<ListItem_ title="Gestión Ambiental y Sostenibilidad">
								<ul>
									<li>Reducción de huella de carbono.</li>
									<li>Digitalización de procesos.</li>
									<li>Selección de proveedores con criterios ambientales.</li>
								</ul>
							</ListItem_>
						</List>
					</article>
				</Card>
			</div>
		</section>
	);
}

export default SIG;
