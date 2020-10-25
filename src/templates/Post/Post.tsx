import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Page from "../../components/Page/Page";
import "./Post.scss";
import type { GraphQl, SiteData } from "../../types/GraphQl";
import type { PostData } from "../../types/PostData";

interface PostProps extends GraphQl<
	{ markdownRemark: PostData; } &
	SiteData
> {}

const Post: FunctionComponent<PostProps> = ({ data }) => {
	const { frontmatter, html } = data.markdownRemark;

	return (
		<Page>
			<Helmet>
				<title>
					{frontmatter.title} &middot; {data.site.siteMetadata.title}
				</title>
			</Helmet>

			<article className="Post">
				<header className="Post__header">
					<h1 className="Post__title">
						{frontmatter.title}
					</h1>

					<ul className="Post__meta">
						<li className="Post__metaItem">
							<time className="Post__date">
								{frontmatter.date}
							</time>
						</li>
					</ul>
				</header>

				<div
					className="Post__content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</article>
		</Page>
	)
}

export default Post;

export const pageQuery = graphql`
	query PostQuery($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(frontmatter: {
			slug: { eq: $slug }
		}) {
			html
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				slug
				title
				tags
			}
		}
	}
`;
