import { Text, makeStyles, tokens } from "@fluentui/react-components";
import SVGIcon from "@Presentation/View/Components/SVGIcon";
import clsx from "clsx";
import React, { useId } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
	root: { backgroundColor: tokens.colorNeutralBackground2 },
	header: { color: tokens.colorBrandBackground, verticalAlign: "middle" },
});

function Nav(): React.JSX.Element {
	const navId = useId();
	const classes = useStyles();

	return (
		<nav className={clsx("navbar", "navbar-expand-lg", classes.root)}>
			<div className="container w-100 mx-auto">
				<NavLink to="/" className="navbar-brand">
					<SVGIcon width={32} height={32} className="me-2" />

					<Text
						className={classes.header}
						as="h1"
						size={500}
						weight="regular"
						style={{ fontFamily: "Benguiat Regular" }}
					>
						RESQBIT
					</Text>
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${navId}`}
					aria-controls={navId}
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id={navId}>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/" className={({ isActive }) => clsx("nav-link", isActive && "active")} aria-current="page">
								Inicio
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/mapa-de-procesos"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								Mapa de Procesos
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/faq"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								FAQ
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
