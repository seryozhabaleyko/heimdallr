import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_POSTS_REQUEST } from '../constants/actionTypes';
import { fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';

async function fetchPostsApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await response.json();
    return json;
}

function* fetchPosts(limit = 5) {
    try {
        const posts = yield call(fetchPostsApi, limit);
        yield put(fetchPostsSuccess(posts));
    } catch (error) {
        yield put(fetchPostsFailure(error.name, error.message));
    }
}

export default function* rootSaga() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
