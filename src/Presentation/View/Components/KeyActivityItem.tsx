import { Card, Text } from "@fluentui/react-components";
import React from "react";

function KeyActivityItem({ index, force }: { index: number; force: KeyActivityItemType }) {
	return (
		<Card appearance="outline" className="mb-1">
			<article className="d-flex flex-row align-items-center justify-content-between gap-4">
				<Text as="span" size={600} weight="semibold">
					{index}
				</Text>

				<div className="flex-grow-1">
					<div className="d-flex flex-row gap-2">
						<Text as="h4" size={400} weight="semibold" block>
							{force.title}
						</Text>
					</div>

					<Text as="p" size={400} block>
						{renderDesc(force.desc, force.listType)}
					</Text>
				</div>
			</article>
		</Card>
	);
}

function renderDesc(items: DescItem[], type: "ol" | "ul" = "ol"): React.ReactNode {
	const ListTag = type === "ol" ? "ol" : "ul";
	return (
		<ListTag>
			{items.map((item, i) => (
				<li key={i}>
					{typeof item === "string" ? (
						item
					) : (
						<>
							{item.text}
							{item.sub && item.sub.length > 0 && renderDesc(item.sub, item.listType || type)}
						</>
					)}
				</li>
			))}
		</ListTag>
	);
}

type KeyActivityItemType = {
	title: string;
	desc: DescItem[];
	listType?: "ol" | "ul";
};

type DescItem = string | { text: string; sub: DescItem[]; listType?: "ol" | "ul" };

export default KeyActivityItem;
export type { DescItem, KeyActivityItemType };
