import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import PostList from "../components/PostList/PostList";
import Post from "../templates/Post/post";
import Page from "./../components/Page/Page";

interface Post {
	id: string;
	frontmatter: {
		slug: string;
		title: string;
		date: string;
	},
	html: any;
}

interface HomeProps {
	data: {
		allMarkdownRemark: {
			edges: Array<{
				node: Post;
			}>;
		};
		site: {
			siteMetadata: {
				title: string;
			};
		};
	};
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
	const posts = data.allMarkdownRemark.edges.map(edge => edge.node);

	return (
		<Page>
			<Helmet>
				<title>Thoughts | {data.site.siteMetadata.title}</title>
			</Helmet>

			<h1>
				Thoughts
			</h1>

			<PostList posts={posts}/>
		</Page>
	)
};

export default Home;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
					}
				}
			}
		}
	}
`
