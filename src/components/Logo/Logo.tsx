import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import "./Logo.scss";

const Logo: FunctionComponent = () => {
	return (
		<Link aria-label="Home" className="Logo" to="/">
			Joeri
		</Link>
	)
}

export default Logo;