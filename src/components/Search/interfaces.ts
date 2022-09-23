export interface ISearchData {
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: Array<number>,
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export interface ISearchProps {
    searchQuery?: string,
    searchLoadResults: Function,
    searchSetQuery: Function,
    data?: ISearchData[],
    loading: boolean,
}

export interface ISearchState {
    searchValue: string,
}

export interface IHocStateProps {
    searchQuery: string,
    loading: boolean,
    data: ISearchData[],
}

export interface IHocDispatchProps {
    searchLoadResults: Function,
    searchSetQuery: Function,
    push: Function,
}

export interface IReducerState { 
    loading: boolean,
    searchQuery: string,
    data?: ISearchData[],
}