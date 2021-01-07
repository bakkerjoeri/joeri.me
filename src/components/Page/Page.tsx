import React, { FunctionComponent } from "react";
import Logo from "../Logo/Logo";
import "./Page.scss";

interface PageProps {
	className?: string;
}

const Page: FunctionComponent<PageProps> = ({ children, className }) => {
	if (className) {
		className = `Page ${className}`;
	} else {
		className = "Page";
	}

	return (
		<div className={className}>
			<header className="Page__header">
				<Logo />
			</header>

			<main
				className="Page__main"
				id="main"
			>
				{children}
			</main>
		</div>
	);
}

export default Page;
