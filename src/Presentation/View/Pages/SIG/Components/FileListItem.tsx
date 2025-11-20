import { Button, Link, makeStyles, shorthands, Text, tokens } from "@fluentui/react-components";
import { ArrowDownloadRegular } from "@fluentui/react-icons";

type Props = {
	index: number;
	name: string;
	url: string;
};

const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
		...shorthands.gap("1rem"),
		...shorthands.padding("1rem"),
		...shorthands.borderBottom(tokens.strokeWidthThin, "solid", tokens.colorNeutralStroke2),
		"&:last-child": {
			borderBottom: "none",
		},
	},
	index: {
		fontSize: "2rem",
		fontWeight: tokens.fontWeightSemibold,
		color: tokens.colorBrandForeground1,
		minWidth: "40px",
		textAlign: "center",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
	},
	title: {
		fontWeight: tokens.fontWeightSemibold,
	},
	actions: {
		marginLeft: "auto",
	},
});

function FileListItem({ index, name, url }: Props): React.JSX.Element {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.index}>{(index + 1).toString().padStart(2, "0")}</div>
			<div className={classes.content}>
				<Text as="span" className={classes.title}>
					{name}
				</Text>
			</div>
			<div className={classes.actions}>
				<Link href={url} target="_blank" rel="noopener noreferrer">
					<Button icon={<ArrowDownloadRegular />} appearance="subtle">
						Descargar
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default FileListItem;
