import mapImage from "@/assets/SIG/disclosoureindex2024.png";
import heroImage from "@/assets/SIG/ISO-9001_Banner.png";
import { Button, Divider, Image, makeStyles, Text, Title1 } from "@fluentui/react-components";
import { BookInformationFilled } from "@fluentui/react-icons";
import Footer from "@Presentation/View/Components/Footer";
import Hero from "@Presentation/View/Components/Hero";
import { useNavigate } from "react-router-dom";
import Section1 from "./Section1";

function SIG(): React.JSX.Element {
	const classes = useStyles();
	const navigate = useNavigate();

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

					<Divider className="my-4" />

					<div className="d-flex flex-nowrap align-items-start gap-3">
						<figure style={{ margin: 0 }}>
							<Image src={mapImage} alt="Mapa de Procesos ResqBit" className={classes.processMap} />
							<figcaption
								style={{
									fontSize: "0.75rem",
									opacity: 0.7,
									marginTop: "0.5rem",
								}}
							>
								Mapa de procesos (versión 2024)
							</figcaption>
						</figure>

						<div className="flex-grow-1">
							<Text as="p" size={400} block>
								El mapa de procesos de ResqBit ilustra cómo nuestras actividades clave están interrelacionadas para
								cumplir con los requisitos de la normativa ISO. Cada proceso está diseñado para garantizar la seguridad,
								eficiencia y calidad en todas nuestras operaciones.
							</Text>

							<Button
								appearance="subtle"
								icon={<BookInformationFilled />}
								onClick={() => navigate("/stakeholders/iso-standards/processes-map")}
								aria-label="Ir al mapa de procesos interactivo"
							>
								Visita Nuestro Mapa de Procesos Interactivo
							</Button>
						</div>
					</div>
				</section>

				<section className="container mb-4">
					<Title1 as="h2" align="start" className="mb-3" block>
						Documentos y Reportes
					</Title1>

					<div style={{ display: "block", marginBottom: "25rem" }} />
				</section>
			</main>

			<Footer />
		</div>
	);
}

const useStyles = makeStyles({
	processMap: {
		width: "100%",
		height: "auto",
		aspectRatio: "1053 / 812",
		objectFit: "contain",
		maxWidth: "clamp(125px, 500px, 1053px)",
		transition: "width 0.3s ease",
	},
});

export default SIG;
