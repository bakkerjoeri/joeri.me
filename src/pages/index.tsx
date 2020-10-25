import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import Page from "./../components/Page/Page";

interface HomeProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
			}
		}
	}
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
	return (
		<Page>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
			</Helmet>

			<h1>
				👋🏼 Hi, I'm Joeri
			</h1>

			<p>
				I'm a frontend developer, currently working at <a href="https://decorrespondent.nl" className="no-break">De Correspondent</a> and its English counterpart, <a href="https://thecorrespondent.com" className="no-break">The Correspondent</a>.
			</p>

			<p>
				I also like to make games, some of which I actually finish and release. You can find them on <a href="https://bakkerjoeri.itch.io/">itch.io</a>.
			</p>

			<p>Follow me on <a href="https://twitter.com/bakkerjoeri">twitter</a>, check out my code on <a href="https://github.com/bakkerjoeri/">GitHub</a>.</p>
		</Page>
	)
};

export default Home

export const query = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
