import { ISearchData } from './interfaces'

export enum actionTypes {
    SEARCH_SET_QUERY = 'SEARCH_SET_QUERY',
    SEARCH_LOAD_RESULTS = 'SEARCH_LOAD_RESULTS',
    SEARCH_LOAD_RESULTS_REQUEST = 'SEARCH_LOAD_RESULTS_REQUEST',
    SEARCH_SET_RESULTS = 'SEARCH_SET_RESULTS',
    SEARCH_SET_LOADING = 'SEARCH_SET_LOADING',
    SEARCH_DELETE_ALL_DATA = 'SEARCH_DELETE_ALL_DATA',
}

interface ISearchActionSetQuery {
    type: actionTypes.SEARCH_SET_QUERY,
    data: {
        searchQuery: string,
    }
}

interface ISearchActionSetLoading {
    type: actionTypes.SEARCH_SET_LOADING,
    data: {
        loading: boolean,
    }
}

interface ISearchActionSetResults {
    type: actionTypes.SEARCH_SET_RESULTS,
    data: {
        data: ISearchData[],
    }
}

interface ISearchActionDeleteData {
    type: actionTypes.SEARCH_DELETE_ALL_DATA,
}

export interface ISearchActionLoadResults {
    type: actionTypes.SEARCH_LOAD_RESULTS,
    data: {
        searchQuery: string,
    }
}

export type Action = ISearchActionSetQuery | ISearchActionSetLoading | ISearchActionSetResults | ISearchActionDeleteData


