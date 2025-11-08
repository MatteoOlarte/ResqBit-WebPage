import { Text } from "@fluentui/react-components";
import { NavLink, type NavLinkProps } from "react-router-dom";

function IconLink({ children, icon, className, size = 300, iconPosition = "left", ...props }: IconLinkProps) {
	return (
		<NavLink {...props}>
			<Text as="span" size={size} className="d-flex align-items-center gap-2">
				{iconPosition === "left" && icon}
				<span>{children}</span>
				{iconPosition === "right" && icon}
			</Text>
		</NavLink>
	);
}

export type IconLinkSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type IconLinkPosition = "left" | "right";

export type IconLinkProps = NavLinkProps & {
	children: React.ReactNode;
	icon: React.ReactNode;
	size?: IconLinkSize;
	iconPosition?: IconLinkPosition; // controla posicion del icono
};

export default IconLink;
