import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createPages: GatsbyNode["createPages"] = async ({
	graphql,
	actions,
}) => {
	const { createPage } = actions;

	const allMarkdown: {
		errors?: any;
		data?: { allMarkdownRemark: { edges: { node: { frontmatter: { slug?: string } } }[] } };
	} = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}`
	);

	allMarkdown.data?.allMarkdownRemark.edges.forEach(edge => {
		const { slug } = edge.node.frontmatter;

		if (!slug) {
			throw new Error('This failed!');
		}

		createPage({
			path: slug,
			component: resolve(__dirname, 'src/templates/Post/Post.tsx'),
			context: {
				slug,
			},
		})
	})
}
