import React from "react";
import { Helmet } from "react-helmet";
import Page from "./../components/Page/Page";

export default function Home() {
	return (
		<Page>
			<Helmet>
				<title>Joeri</title>
			</Helmet>

			<h1>
				👋🏼 Hi, I'm Joeri
			</h1>

			<p>
				I work as a front-end developer at <a href="https://decorrespondent.nl">De Correspondent</a> and its English counterpart, <a href="https://thecorrespondent.com">The Correspondent</a>.
			</p>

			<p>
				I also make games, which you can find on <a href="https://bakkerjoeri.itch.io/">itch.io</a>.
			</p>
		</Page>
	)
}
