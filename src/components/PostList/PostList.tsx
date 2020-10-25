import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import "./PostList.scss";

interface Post {
	id: string;
	frontmatter: {
		slug: string;
		title: string;
		date: string;
	},
	html: any;
}

interface PostListProps {
	posts: Post[];
};

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
	return (
		<ul className="PostList">
			{posts.map(post => {
				return (
					<li className="PostList__item" key={post.id}>
						<Link to={post.frontmatter.slug}>
							{post.frontmatter.title}
						</Link>
					</li>
				);
			})}
		</ul>
	)
}

export default PostList;
