import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";
import { Subtitle1, Subtitle2, Text } from "@fluentui/react-components";

const focuses: KeyActivityItemType[] = [
	{
		title: "Transformar el caos en calma",
		desc: ["Mediante una arquitectura centrada en la automatización, la seguridad y la analítica de datos."],
	},
	{
		title: "Ofrecer una experiencia digital fluida",
		desc: ["Donde clientes y auditores trabajen dentro de un entorno seguro, colaborativo y accesible desde la nube."],
	},
	{
		title: "Integrar los pilares tecnológicos",
		desc: [
			"(CRM, BI, SIEM, automatización y gestión documental) bajo una visión omnicanal con identidad única y control de accesos unificado (SSO y MFA).",
		],
	},
];

function PhaseA() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Architecture Vision
				</Subtitle1>

				<Subtitle2 className="mb-1" block>
					Visión de Arquitectura
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La visión de arquitectura de ResQBit busca consolidar un ecosistema empresarial unificado que integre
					auditorías ISO, inteligencia de negocio y servicios de ciberseguridad en una misma plataforma digital. El
					objetivo es convertir la complejidad tecnológica y normativa de las PYMEs en procesos simples, medibles y
					automatizados, garantizando confianza, trazabilidad y cumplimiento regulatorio.
				</Text>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-1" block>
					Enfoques Principales
				</Subtitle2>
        
				<div>
					{focuses.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>
			</div>

			<div className="mb-4">
				<Subtitle2 className="mb-1" block>
					Alineación con Valores Corporativos
				</Subtitle2>

				<Text as="p" size={400} block>
					La arquitectura se alinea con los valores corporativos de transparencia, eficiencia y confianza digital.
				</Text>
			</div>
		</>
	);
}

export default PhaseA;
