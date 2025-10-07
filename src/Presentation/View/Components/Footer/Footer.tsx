import { resqBitDarkTheme } from "@/Presentation/Base/colors";
import { Field, FluentProvider, Input, Subtitle2, Text, makeStyles, tokens } from "@fluentui/react-components";
import SVGIcon from "@Presentation/View/Components/SVGIcon";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer(): React.JSX.Element {
	const classes = useStyles();

	return (
		<FluentProvider theme={resqBitDarkTheme}>
			<footer className={classes.root}>
				<div className="container w-100 mx-auto py-5">
					<div className="row gy-4">
						<div className="col-12 col-md-4">
							<div className="d-flex gap-2 mb-3 align-items-center justify-content-start">
								<SVGIcon width={32} height={32} appearance="secondary" />

								<Text
									className={classes.text}
									as="h1"
									size={500}
									weight="regular"
									style={{ fontFamily: "Benguiat Regular" }}
								>
									RESQBIT
								</Text>
							</div>

							<div className="d-flex flex-column">
								<Text as="p" className={classes.text}>
									Copyright © 2025 ResqBit S.A.S.
								</Text>
								<Text as="p" className={classes.text}>
									Todos los derechos reservados.
								</Text>
							</div>
						</div>

						<div className="col-12 col-md-4">
							<div className="mb-3">
								<Subtitle2 className={classes.text}>Sobre Nosotros</Subtitle2>
							</div>

							<div className="d-flex flex-column">
								<NavLink to="/mapa-de-procesos" className={classes.link}>
									<Text as="p" className={classes.text}>
										Normativas ISO
									</Text>
								</NavLink>

								<NavLink to="/mapa-de-procesos" className={classes.link}>
									<Text as="p" className={classes.text}>
										Mapa de Procesos
									</Text>
								</NavLink>

								<NavLink to="/" className={classes.link}>
									<Text as="p" className={classes.text}>
										Capasides de Negocio
									</Text>
								</NavLink>
							</div>
						</div>

						<div className="col-12 col-md-4">
							<div className="mb-3">
								<Subtitle2 className={classes.text}>Unete a nuestra lista de correo</Subtitle2>
							</div>

							<Field>
								<Input placeholder="example@example.com" />
							</Field>
						</div>
					</div>
				</div>
			</footer>
		</FluentProvider>
	);
}

const useStyles = makeStyles({
	root: { background: tokens.colorNeutralBackgroundStatic },
	text: { color: tokens.colorNeutralForeground1, margin: 0 },
	link: { textDecoration: "none" },
});

export default Footer;
