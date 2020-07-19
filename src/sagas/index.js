import { takeEvery, put, call } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { FETCH_POSTS_REQUEST } from '../constants/actionTypes';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';

async function fetchPostsApi(limit) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    return await response.json();
}

function* fetchPosts(limit = 5) {
    yield put(fetchPostsRequest());

    try {
        const posts = yield call(fetchPostsApi, limit);
        yield put(fetchPostsSuccess(posts));
    } catch (error) {
        yield put(fetchPostsFailure(error.name, error.message));
    }
}

export default function* rootSaga() {
    //yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}
