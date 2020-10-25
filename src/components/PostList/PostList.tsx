import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { PostData } from "../../types/PostData";
import "./PostList.scss";

interface PostListProps {
	posts: PostData[];
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
