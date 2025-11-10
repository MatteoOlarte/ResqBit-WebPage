import heroImage from "@/assets/Strategies/Business-Strategy-Banner-x4.png";
import { Subtitle1, Text, Title1 } from "@fluentui/react-components";
import Hero from "@Presentation/View/Components/Hero";
import React from "react";
import { NavLink } from "react-router-dom";
import BlueOcean from "./Components/BlueOcean";
import DOFA from "./Components/DOFA";
import Porter from "./Components/Porter";
import Footer from "../../Components/Footer";

function Strategies(): React.JSX.Element {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main style={{marginBottom: '5rem'}}>
				<Hero title="Estrategias" image={heroImage} />

				<div className="container mb-4">
					<Title1 as="h2" align="start" block>
						Estrategias Empresariales
					</Title1>

					<Text as="p" size={400} block>
						En esta sección se presentan las principales estrategias empresariales de Reqbit S.A.S, orientadas a
						fortalecer su posición en el mercado de auditoría y ciberseguridad para PYMES. A través de diferentes
						enfoques de análisis DOFA, Fuerzas de Porter, Océano Azul y Modelo Clásico se identifican los factores
						internos y externos que influyen en el crecimiento sostenible de la compañía. El propósito es ofrecer a los
						inversionistas una visión integral del marco estratégico que guía las decisiones corporativas, la innovación
						en servicios y la consolidación de ventajas competitivas en un entorno digital en constante evolución.
					</Text>

					<Subtitle1 as="h3" align="start" className="mb-2" block>
						Enfoques de Análisis Estratégico
					</Subtitle1>

					<div>
						<NavLink to="#dofa">
							<Text as="span" size={400} className="mb-1 ms-3" block>
								1. Análisis DOFA: Evaluación de Debilidades, Oportunidades, Fortalezas y Amenazas.
							</Text>
						</NavLink>

						<NavLink to="#porter">
							<Text as="span" size={400} className="mb-1 ms-3" block>
								2. Fuerzas de Porter: Análisis de la competencia y el entorno del mercado.
							</Text>
						</NavLink>

						<NavLink to="#oceano-azul">
							<Text as="span" size={400} className="mb-1 ms-3" block>
								3. Océano Azul: Identificación de oportunidades en mercados no explotados.
							</Text>
						</NavLink>

						<NavLink to="#modelo-clasico">
							<Text as="span" size={400} className="mb-1 ms-3" block>
								4. Modelo Clásico: Enfoque tradicional de análisis estratégico.
							</Text>
						</NavLink>
					</div>
				</div>

				<section className="container mb-4">
					<Subtitle1 id="dofa" as="h3" align="start" className="mb-2" block>
						Análisis DOFA
					</Subtitle1>

					<DOFA />
				</section>

				<section className="container mb-4">
					<Subtitle1 id="porter" as="h3" align="start" className="mb-2" block>
						Fuerzas de Porter
					</Subtitle1>

					<Porter />
				</section>

				<section className="container mb-4">
					<Subtitle1 id="oceano-azul" as="h3" align="start" className="mb-2" block>
						Océano Azul
					</Subtitle1>

					<BlueOcean />
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default Strategies;
