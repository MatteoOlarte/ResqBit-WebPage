import bannerImage from "@/assets/Arch/Arch_Banner1x.jpg";
import type { SelectTabData, SelectTabEvent, TabValue } from "@fluentui/react-components";
import { LargeTitle, Tab, TabList, Text } from "@fluentui/react-components";
import Footer from "@Presentation/View/Components/Footer";
import Hero from "@Presentation/View/Components/Hero";
import React, { useState } from "react";
import PhaseA from "./Components/PhaseA";
import PhaseB from "./Components/PhaseB";
import PhaseC from "./Components/PhaseC";
import PhaseD from "./Components/PhaseD";
import PhaseE from "./Components/PhaseE";
import PhaseF from "./Components/PhaseF";
import PhaseG from "./Components/PhaseG";
import PhaseH from "./Components/PhaseH";

function Arch(): React.JSX.Element {
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
			<main style={{ marginBottom: "5rem" }}>
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
							<Tab value="tab1">Fase A</Tab>
							<Tab value="tab2">Fase B</Tab>
							<Tab value="tab3">Fase C</Tab>
							<Tab value="tab4">Fase D</Tab>
							<Tab value="tab5">Fase E</Tab>
							<Tab value="tab6">Fase F</Tab>
							<Tab value="tab7">Fase G</Tab>
							<Tab value="tab8">Fase H</Tab>
						</TabList>
					</section>

					<div className="mb-4">
						{selectedTab === "tab1" && <PhaseA />}
						{selectedTab === "tab2" && <PhaseB />}
						{selectedTab === "tab3" && <PhaseC />}
						{selectedTab === "tab4" && <PhaseD />}
						{selectedTab === "tab5" && <PhaseE />}
						{selectedTab === "tab6" && <PhaseF />}
						{selectedTab === "tab7" && <PhaseG />}
						{selectedTab === "tab8" && <PhaseH />}
					</div>
				</section>
			</main>

			<Footer />
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
