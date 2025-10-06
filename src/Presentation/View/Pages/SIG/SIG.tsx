import type { SelectTabData, SelectTabEvent, TabValue } from "@fluentui/react-components";
import { Card, CardHeader, LargeTitle, Subtitle2, Tab, TabList, Text, tokens } from "@fluentui/react-components";
import Footer from "@Presentation/View/Components/Footer";
import Nav from "@Presentation/View/Components/Nav";
import React, { useState } from "react";

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
				gridTemplateRows: "auto 1fr auto",
				minHeight: "100vh",
			}}
		>
			<div>
				<Nav />
			</div>
			<div>
				<main className="container w-100 mx-auto my-5">
					<section className="mb-3">
						<LargeTitle as="h1" align="start" block>
							Normativa ISO
						</LargeTitle>
						<Text as="p" size={400} style={{ marginBottom: "2rem" }}>
							En ResqBit, entendemos que la gestión eficaz de la seguridad de la información es crucial para la
							excelencia operativa y el cumplimiento normativo. Nuestro Sistema Integrado de Gestión (SIG) se basa en la
							normativa ISO y en procesos claros y auditables.
						</Text>
					</section>
					<section>
						<TabList size="large" selectedValue={selectedTab} onTabSelect={onTabSelect}>
							<Tab value="tab1">Procesos Estratégicos</Tab>
							<Tab value="tab2">Procesos Misionales</Tab>
							<Tab value="tab3">Procesos de Apoyo</Tab>
						</TabList>
					</section>
					<div className="mt-4">
						{selectedTab === "tab1" && <StrategicProcesses />}
						{selectedTab === "tab2" && <MissionProcesses />}
						{selectedTab === "tab3" && <SupportProcesses />}
					</div>
				</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

function StrategicProcesses() {
	return (
		<Card className="mb-4">
			<CardHeader>
				<Subtitle2 as="h2">Procesos Estratégicos</Subtitle2>
			</CardHeader>
			<div style={{ display: "grid", gap: "1.5rem" }}>
				<ProcessSection
					title="Planificación Estratégica"
					items={[
						"Análisis DOFA (Contexto de la organización).",
						"Definición de objetivos de calidad, medio ambiente y SST.",
						"Establecimiento de políticas corporativas.",
					]}
				/>
				<ProcessSection
					title="Gestión de Riesgos y Oportunidades"
					items={["Identificación de amenazas y oportunidades.", "Evaluación de cambios normativos y tecnológicos."]}
				/>
				<ProcessSection
					title="Gestión de Partes Interesadas"
					items={[
						"Identificación y análisis de necesidades.",
						"Comunicación y reporte a clientes, reguladores y socios.",
					]}
				/>
				<ProcessSection
					title="Revisión por la Dirección"
					items={["Evaluación del desempeño del SIG.", "Toma de decisiones correctivas y de mejora."]}
				/>
			</div>
		</Card>
	);
}

function MissionProcesses() {
	return (
		<Card className="mb-4">
			<CardHeader>
				<Subtitle2 as="h2">Procesos Misionales (Clave)</Subtitle2>
			</CardHeader>
			<div style={{ display: "grid", gap: "1.5rem" }}>
				<ProcessSection
					title="Auditoría y Diagnóstico"
					items={[
						"Auditorías internas y externas (ISO 9001, 14001, 27001, 45001).",
						"Evaluación de vulnerabilidades (OpenVAS, Nessus).",
						"Pruebas de RedTeam, OWISAM e ingeniería social.",
					]}
				/>
				<ProcessSection
					title="Consultoría y Asesoría"
					items={[
						"Implementación de sistemas de gestión.",
						"Planes de mejora continua.",
						"Transformación digital y cumplimiento normativo.",
					]}
				/>
				<ProcessSection
					title="Desarrollo de Soluciones BI"
					items={[
						"Modelado y validación de datos.",
						"Creación de tableros en Power BI.",
						"Capacitación y soporte post-implementación.",
					]}
				/>
				<ProcessSection
					title="Gestión de Ciberseguridad"
					items={[
						"Instalación y configuración de SIEM (Wazuh/Splunk).",
						"Monitoreo y respuesta a incidentes (EDR: Defender/CrowdStrike).",
						"Gestión de identidad y acceso (IAM/SSO: Azure AD/Okta).",
					]}
				/>
				<ProcessSection
					title="Certificación ISO"
					items={[
						"Preparación para auditorías externas.",
						"Seguimiento de no conformidades.",
						"Emisión de reportes ejecutivos.",
					]}
				/>
			</div>
		</Card>
	);
}

function SupportProcesses() {
	return (
		<Card className="mb-4">
			<CardHeader>
				<Subtitle2 as="h2">Procesos de Apoyo</Subtitle2>
			</CardHeader>
			<div style={{ display: "grid", gap: "1.5rem" }}>
				<ProcessSection
					title="Gestión de Recursos Humanos"
					items={[
						"Reclutamiento y selección.",
						"Capacitación en normas ISO, seguridad y herramientas digitales.",
						"Evaluación del desempeño y bienestar laboral.",
					]}
				/>
				<ProcessSection
					title="Gestión Tecnológica y de Infraestructura"
					items={[
						"Administración de plataformas en la nube (Azure/AWS).",
						"Mantenimiento de equipos y software.",
						"Soporte técnico y gestión de incidentes TI.",
					]}
				/>
				<ProcessSection
					title="Gestión Documental"
					items={[
						"Control de documentos y registros (SharePoint/Github).",
						"Versiones y cifrado de informes.",
						"Respaldo y recuperación de información.",
					]}
				/>
				<ProcessSection
					title="Gestión Comercial y Marketing"
					items={[
						"Prospección y fidelización de clientes.",
						"Estrategias de marketing digital (redes sociales, ads).",
						"Alianzas estratégicas y networking.",
					]}
				/>
				<ProcessSection
					title="Gestión Financiera y Administrativa"
					items={[
						"Contabilidad y facturación (Helisa).",
						"Presupuestos y control de gastos.",
						"Gestión de proveedores y contratos.",
					]}
				/>
				<ProcessSection
					title="Gestión de la Seguridad de la Información"
					items={[
						"Protección de activos de información.",
						"Políticas de acceso y cifrado.",
						"Auditorías internas de ciberseguridad.",
					]}
				/>
				<ProcessSection
					title="Gestión Ambiental y Sostenibilidad"
					items={[
						"Reducción de huella de carbono.",
						"Digitalización de procesos.",
						"Selección de proveedores con criterios ambientales.",
					]}
				/>
			</div>
		</Card>
	);
}

function ProcessSection({ title, items }: { title: string; items: string[] }) {
	return (
		<Card className="mb-2" style={{ background: tokens.colorNeutralBackground3 }}>
			<CardHeader>
				<Subtitle2 as="h3">{title}</Subtitle2>
			</CardHeader>
			<ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
				{items.map((item, idx) => (
					<li key={idx} style={{ marginBottom: "0.5rem", color: tokens.colorNeutralForeground2 }}>
						<Text as="span" size={300}>
							{item}
						</Text>
					</li>
				))}
			</ul>
		</Card>
	);
}

// const useStyles = makeStyles({
// 	Header: {
// 		fontFamily: "Benguiat Regular, var(--font-family-base)",
// 		color: tokens.colorNeutralForeground1,
// 		fontSize: "clamp(1.2rem, 4vw, 2.5rem)",
// 		lineHeight: 1.1,
// 		margin: 0,
// 	},
// });

export default SIG;
