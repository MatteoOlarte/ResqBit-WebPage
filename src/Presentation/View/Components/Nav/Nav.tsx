import { GlobalContext } from "@/Presentation/ViewModel/GlobalContext";
import { useRequiredContext } from "@/Presentation/ViewModel/Utils/useRequiredContext";
import { Text, makeStyles, tokens } from "@fluentui/react-components";
import SVGIcon from "@Presentation/View/Components/SVGIcon";
import clsx from "clsx";
import React, { useEffect, useId, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Nav({ threshold = 59 }: NavProps): React.JSX.Element {
	const global_C = useRequiredContext(GlobalContext);
	const scrolled = useScrolled(threshold);

	if (!global_C.InvertorMode) {
		return <DefaultNavBar scrolled={scrolled} />;
	} else {
		return <InvertorNavBar scrolled={scrolled} />;
	}
}

interface NavProps extends React.ComponentProps<"nav"> {
	threshold?: number;
}

function DefaultNavBar({ scrolled }: { scrolled: boolean }) {
	const navId = useId();
	const classes = useStyles();

	return (
		<nav className={clsx("navbar", "navbar-expand-lg", "sticky-top", classes.root1, scrolled && classes.root2)}>
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
								to="/stakeholders/leadership-and-governance"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								Stakeholders
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

function InvertorNavBar({ scrolled }: { scrolled: boolean }) {
	const navId = useId();
	const classes = useStyles();

	return (
		<nav className={clsx("navbar", "navbar-expand-lg", "sticky-top", classes.root1, scrolled && classes.root2)}>
			<div className="container w-100 mx-auto">
				<NavLink to="/" className="navbar-brand">
					<SVGIcon width={32} height={32} className="me-2" />

					<Text
						className={clsx(classes.header)}
						as="h1"
						size={500}
						weight="regular"
						style={{ fontFamily: "Benguiat Regular" }}
					>
						RESQBIT
					</Text>

					<span className={styles["mi-s-2"]}>
						<i className={classes.divider}>|</i>
					</span>

					<span className={styles["mi-s-2"]}>
						<Text as="h1" size={300} weight="regular" className={clsx(classes.stakeholdersBadge)}>
							STAKEHOLDERS
						</Text>
					</span>
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
								to="/stakeholders/iso-standards"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								Normativa ISO
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/stakeholders/leadership-and-governance"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								Liderazgo y Gobernanza
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/stakeholders/business-strategies"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								Estrategias
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/stakeholders/togaf-architecture"
								className={({ isActive }) => clsx("nav-link", isActive && "active")}
								aria-current="page"
							>
								Arquitectura Empresarial
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="/stakeholders/faq"
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

// Hook: track scroll position and return true when beyond threshold (in px)
function useScrolled(threshold = 24) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll(); // initialize on mount
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return scrolled;
}

const useStyles = makeStyles({
	root1: {
		backgroundColor: tokens.colorNeutralBackground2,
		borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
		transition: "background .24s cubic-bezier(.4,0,.6,1);",
	},
	root2: {
		backgroundColor: `color-mix(in srgb, ${tokens.colorNeutralBackground2}, transparent 70%)`,
		borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
		backdropFilter: "saturate(180%) blur(20px)",
	},
	header: {
		color: tokens.colorBrandBackground,
		verticalAlign: "middle",
	},
	stakeholdersBadge: {
		border: `1px solid ${tokens.colorBrandBackground}`,
		color: `${tokens.colorBrandBackground}`,
		padding: "2px 6px",
		borderRadius: "4px",
		fontFamily: "Benguiat Regular",
	},
	divider: {
		color: tokens.colorNeutralForeground3,
	},
});

export default Nav;
