import KeyActivityItem, { type KeyActivityItemType } from "@Presentation/View/Components/KeyActivityItem";
import { Subtitle1, Subtitle2, Text } from "@fluentui/react-components";

const infrastructure: KeyActivityItemType[] = [
	{
		title: "Entorno Cloud (Azure)",
		desc: ["alojamiento de servicios, bases de datos y BI en entornos escalables y seguros."],
	},
	{
		title: "Dispositivos con EDR",
		desc: ["laptops corporativas con protección avanzada contra amenazas y cifrado de disco."],
	},
	{
		title: "VPN corporativa",
		desc: ["garantiza acceso seguro a los entornos internos desde ubicaciones remotas."],
	},
	{
		title: "Firewalls de próxima generación y políticas Zero Trust",
		desc: [],
	},
	{
		title: "Autenticación multifactor (MFA) y gestión de identidades (Azure AD)",
		desc: [],
	},
	{
		title: "Copias de seguridad automatizadas y replicación geográfica",
		desc: [],
	},
];

function PhaseD() {
	return (
		<>
			<div className="mb-4">
				<Subtitle1 as="h2" className="mb-3" block>
					Technology Architecture
				</Subtitle1>

				<Subtitle2 className="mb-1" block>
					Arquitectura Tecnológica
				</Subtitle2>

				<Text as="p" size={400} className="mb-3" block>
					La arquitectura tecnológica define la infraestructura y los mecanismos de seguridad que permiten operar los
					servicios de ResQBit con alta disponibilidad y resiliencia.
				</Text>

				<Subtitle2 className="mb-1" block>
					Infraestructura y Seguridad
				</Subtitle2>

				<div>
					{infrastructure.map((item, index) => (
						<KeyActivityItem key={index} index={index + 1} force={item} />
					))}
				</div>

				<Text as="p" size={400} block>
					El diseño sigue principios de seguridad por capas (defense in depth) y de cumplimiento normativo ISO 27001,
					garantizando confidencialidad, integridad y disponibilidad de los datos de clientes.
				</Text>
			</div>
		</>
	);
}

export default PhaseD;
