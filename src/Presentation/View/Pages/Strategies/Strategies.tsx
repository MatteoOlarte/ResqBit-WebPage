import heroImage from "@/assets/Strategies/Business-Strategy-Banner-x4.png";
import Hero from "@Presentation/View/Components/Hero";
import React from "react";

function Strategies(): React.JSX.Element {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main>
				<Hero title="Estrategias" image={heroImage} />

				<section className="container mb-4">

        </section>
			</main>
		</div>
	);
}

export default Strategies;
