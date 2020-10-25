export interface GraphQl<Results> {
	data: Results;
};

export interface SiteData {
	site: {
		siteMetadata: {
			title: string;
		}
	}
}

export interface RemarkData<FrontMatter> {
	markdownRemark: {
		id: string;
		frontmatter: FrontMatter;
		html: any;
	};
};

export interface PostFrontMatter {
	date: string;
	slug: string;
	title: string;
	tags: string[];
}
