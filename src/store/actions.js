import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const SAVE_POSTS_DATA = 'SAVE_POSTS_DATA';

const baseUrl = `https://www.reddit.com/r/`;

export function saveData(payload) {
    return {
        type: SAVE_POSTS_DATA,
        payload: payload
    };
}

export function fetchPosts(subreddit) {
    return dispatch => {
        axios.get(`${baseUrl}+${subreddit}+'.json`)
    .then(response => dispatch(saveData(response.data.data.children)));
    }

}