import mapImage from "@/assets/SIG/disclosoureindex2024.png";
import heroImage from "@/assets/SIG/ISO-9001_Banner.png";
import { Button, Divider, Image, makeStyles, Text, Title1 } from "@fluentui/react-components";
import { BookInformationFilled } from "@fluentui/react-icons";
import Footer from "@Presentation/View/Components/Footer";
import Hero from "@Presentation/View/Components/Hero";
import { Link } from "react-router-dom";
import FileListItem from "./Components/FileListItem";
import Section1 from "./Section1";

const files: File[] = [
	{
		name: "ACT001 Acta Revisión por Dirección",
		url: "https://drive.google.com/file/d/16pOwdW2uNpznrweXyTs7u96VWE6gPW9x/view?usp=sharing",
	},
	{
		name: "ACT002 Acta Seguimiento SST",
		url: "https://drive.google.com/file/d/1avgpYd9czto-vkHMr6wJKHy3r0meSBaz/view?usp=sharing",
	},
	{
		name: "ENC001 Encuesta Satisfacción",
		url: "https://drive.google.com/file/d/1_AUtx1HZReKzaStKiSO1hqW7THBKxFIo/view?usp=sharing",
	},
	{
		name: "MAT001 Matriz de Competencia",
		url: "https://drive.google.com/file/d/1tIGN6Anix3O7hwNVWGhUsK65e2isPBil/view?usp=sharing",
	},
	{
		name: "PLN001 Plan de Auditoría",
		url: "https://drive.google.com/file/d/14xRb6CV_YFbQ-5pvwh-AAzaoCnT5wUeD/view?usp=sharing",
	},
	{
		name: "PLN002 Plan de Emergencias",
		url: "https://drive.google.com/file/d/1dGQ7RaVr2RoMgA6Sfd_14Wy7sudDNujC/view?usp=sharing",
	},
	{
		name: "POL001 Control, Gestión y Administración",
		url: "https://drive.google.com/file/d/1Gf7FgXUIB5hYv60JmTBIg0klZnfXTb8Z/view?usp=sharing",
	},
	{
		name: "PRO001 Procedimiento Control Documental",
		url: "https://drive.google.com/file/d/1Nqc1aO2DhPxfeefSjPqPq4DNadnpf3Wv/view?usp=sharing",
	},
	{
		name: "REG001 Registro de no conformidades",
		url: "https://drive.google.com/file/d/1fbWGJW3kozuyMWDgRnl_mXJtSPV672Aw/view?usp=sharing",
	}
];

function SIG(): React.JSX.Element {
	const classes = useStyles();

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
								Mapa de procesos (versión 2025)
							</figcaption>
						</figure>

						<div className="flex-grow-1">
							<Text as="p" size={400} block>
								El mapa de procesos de ResqBit ilustra cómo nuestras actividades clave están interrelacionadas para
								cumplir con los requisitos de la normativa ISO. Cada proceso está diseñado para garantizar la seguridad,
								eficiencia y calidad en todas nuestras operaciones.
							</Text>

							<Link to="/stakeholders/iso-standards/processes-map" target="_blank" rel="noopener noreferrer">
								<Button
									appearance="primary"
									icon={<BookInformationFilled />}
									aria-label="Ir al mapa de procesos interactivo (abre en nueva pestaña)"
								>
									Visita Nuestro Mapa de Procesos Interactivo
								</Button>
							</Link>
						</div>
					</div>

					<Divider className="my-4" />

					<Section1 />
				</section>

				<section className="container mb-4" style={{ paddingBottom: "5rem" }}>
					<Title1 as="h2" align="start" className="mb-3" block>
						Documentos y Reportes
					</Title1>

					<div className={classes.fileListContainer}>
						{files.map((file, index) => (
							<FileListItem key={index} index={index} name={file.name} url={file.url} />
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

type File = {
	name: string;
	url: string;
};

const useStyles = makeStyles({
	processMap: {
		width: "100%",
		height: "auto",
		aspectRatio: "1053 / 812",
		objectFit: "contain",
		maxWidth: "clamp(125px, 500px, 1053px)",
		transition: "width 0.3s ease",
	},
	fileListContainer: {
		display: "flex",
		flexDirection: "column",
	},
});

export default SIG;
