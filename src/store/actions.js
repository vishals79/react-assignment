import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const SAVE_POSTS_DATA = 'SAVE_POSTS_DATA';
export const LOADING_POSTS_DATA = 'LOADING_POSTS_DATA';
export const ERROR = 'ERROR';

const baseUrl = `https://www.reddit.com/r/`;

export function saveData(payload) {
    return {
        type: SAVE_POSTS_DATA,
        payload: payload
    };
}

export function fetchingData() {
    return {
        type: LOADING_POSTS_DATA
    };
}

export function errorWhileFetchingData() {
    return {
        type: ERROR
    };
}

export function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(fetchingData());
        axios.get(`${baseUrl}+${subreddit}+'.json`)
            .then(
                response => dispatch(saveData(response.data.data.children)),
                error => dispatch(errorWhileFetchingData())
            )
    }

}