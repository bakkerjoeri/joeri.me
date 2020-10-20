import React, { FunctionComponent } from "react";
import Logo from "../Logo/Logo";
import { Helmet } from "react-helmet";
import "./Page.scss";

const Page: FunctionComponent = ({ children }) => {
	return (
		<div className="Page">
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
