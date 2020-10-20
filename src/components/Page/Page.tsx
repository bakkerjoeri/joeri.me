import React, { FunctionComponent } from "react";
import Logo from "../Logo/Logo";
import MainNavigation from "../MainNavigation/MainNavigation";
import "./Page.scss";

const Page: FunctionComponent = ({ children }) => {
	return (
		<div className="Page">
			<header className="Page__header">
				<Logo />
			</header>

			<main
				className="Page__main"
				id="main"
			>
				{children}
			</main>

			<footer className="Page__footer">
				<p>Follow me on <a href="https://twitter.com/bakkerjoeri">twitter</a>, check out my code on <a href="https://github.com/bakkerjoeri/">GitHub</a>.</p>
			</footer>
		</div>
	);
}

export default Page;
