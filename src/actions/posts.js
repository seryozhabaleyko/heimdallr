import {
    CREATE_POST_SUCCESS,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../constants/actionTypes';

export const createPost = (post) => ({
    type: CREATE_POST_SUCCESS,
    payload: post,
});

export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchPostsFailure = (errorName, errorMessage) => ({
    type: FETCH_POSTS_FAILURE,
    payload: { name: errorName, message: errorMessage },
});

export const fetchPosts = () => async (dispatch) => {
    dispatch(fetchPostsRequest());

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        dispatch(fetchPostsSuccess(json));
    } catch (error) {
        dispatch(fetchPostsFailure(error.name, error.message));
    }
};
