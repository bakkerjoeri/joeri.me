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
				I'm working as a front-end developer at <a href="https://decorrespondent.nl">De Correspondent</a> and its English counterpart, <a href="https://thecorrespondent.com">The Correspondent</a>.
			</p>

			<p>
				I also like to make games, some of which I actually finish and release. You can find them on <a href="https://bakkerjoeri.itch.io/">itch.io</a>.
			</p>

			<p>Follow me on <a href="https://twitter.com/bakkerjoeri">twitter</a>, check out my code on <a href="https://github.com/bakkerjoeri/">GitHub</a>.</p>
		</Page>
	)
}
