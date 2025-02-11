export interface MarvelResponse {
    code: number;
    status: string;
    data: MarvelData;
}

export interface MarvelData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: Thumbnail;
    comics: ComicList;
    series: SeriesList;
    stories: StoryList;
    events: EventList;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface ComicList {
    available: number;
    items: ComicSummary[];
}

export interface SeriesList {
    available: number;
    items: SeriesSummary[];
}

export interface StoryList {
    available: number;
    items: StorySummary[];
}

export interface EventList {
    available: number;
    items: EventSummary[];
}

export interface ComicSummary {
    resourceURI: string;
    name: string;
}

export interface SeriesSummary {
    resourceURI: string;
    name: string;
}

export interface StorySummary {
    resourceURI: string;
    name: string;
    type: string;
}

export interface EventSummary {
    resourceURI: string;
    name: string;
}
