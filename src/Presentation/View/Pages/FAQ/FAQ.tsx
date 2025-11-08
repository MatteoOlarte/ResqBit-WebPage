import bannerImage from "@/assets/FAQ/faq_banner1x.jpg";
import Hero from "@Presentation/View/Components/Hero";
import React from "react";

function FAQ(): React.JSX.Element {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main>
				<Hero title="FAQ" image={bannerImage} />
			</main>

			<section className="container mb-4"></section>
		</div>
	);
}

export default FAQ;
