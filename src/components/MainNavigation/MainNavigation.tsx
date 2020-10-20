import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import "./MainNavigation.scss";

const MainNavigation: FunctionComponent = () => {
	return (
		<nav className="MainNavigation">
			<ul className="MainNavigation__menuItems">
				<li className="MainNavigation__menuItem">
					<Link className="MainNavigation__link" to="/things">
						Things
					</Link>
				</li>

				<li>
					<Link className="MainNavigation__link" to="/thoughts">
						Thoughts
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default MainNavigation;
