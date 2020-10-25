export interface PostData {
	id: string;
	frontmatter: {
		date: string;
		slug: string;
		title: string;
		tags: string[];
	};
	html: any;
}
