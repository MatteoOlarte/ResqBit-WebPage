import bannerImage from "@/assets/Arch/Arch_Banner1x.jpg";
import type { SelectTabData, SelectTabEvent, TabValue } from "@fluentui/react-components";
import { LargeTitle, Tab, TabList, Text } from "@fluentui/react-components";
import Hero from "@Presentation/View/Components/Hero";
import React, { useState } from "react";
import PhaseE from "./Components/PhaseE";
import PhaseG from "./Components/PhaseG";
import PhaseH from "./Components/PhaseH";

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
							<Tab value="tab5" disabled>
								Fase F
							</Tab>
							<Tab value="tab6">Fase G</Tab>
							<Tab value="tab7">Fase H</Tab>
						</TabList>
					</section>

					<div className="mb-4">
						{selectedTab === "tab4" && <PhaseE />}
						{selectedTab === "tab6" && <PhaseG />}
						{selectedTab === "tab7" && <PhaseH />}
					</div>
				</section>
			</main>
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
