import heroImage from "@/assets/Governance/leadership_banner.jpg";
import Hero from "@Presentation/View/Components/Hero";
import React from "react";

function Governance(): React.JSX.Element {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main>
				<Hero title="Gobernanza" image={heroImage} />

        <section className="container mb-4">
          
        </section>
			</main>
		</div>
	);
}

export default Governance;
