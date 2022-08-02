export interface ISearchResItems {
    href: string,
    data: Array<{
        center?: string;
        date_created?: string;
        description?: string;
        description_508?: string;
        keywords?: Array<string>;
        media_type?: string;
        nasa_id?: string;
        secondary_creator?: string;
        title: string;
        photographer?: string;
        location?: string;
    }>;
    links: Array<{
        href: string;
        rel: string;
        render: string;
    }>;
}

export interface ISearchResult {
    href: string;
    items: Array<ISearchResItems>;
    version: string;
    metadata: object;
}

export interface InitialStateType {
    searchResult: ISearchResult | null;
    selectedResult: ISearchResItems | null;
    gallery: Array<string> | null;
    loading: boolean;
    error: string;
}

export interface Action {
    type: string;
    searchResult: ISearchResult;
    selectedResult: ISearchResItems;
    gallery: Array<string>;
    loading: boolean;
    error: string;
};
