import {
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../constants/actionTypes';

const initialState = {
    posts: [],
    errorMessage: null,
    isLoading: false,
    fetchedPosts: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST_SUCCESS:
            return { ...state, posts: [...state.posts, payload], errorMessage: null };
        case CREATE_POST_FAILURE:
            return { ...state, errorMessage: payload };

        case FETCH_POSTS_REQUEST:
            return { ...state, isLoading: true, error: null };
        case FETCH_POSTS_SUCCESS:
            return { ...state, isLoading: false, fetchedPosts: payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};
