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
