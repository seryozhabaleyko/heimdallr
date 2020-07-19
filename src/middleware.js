import { CREATE_POST_SUCCESS, CREATE_POST_FAILURE } from './constants/actionTypes';

const forbidden = ['fuck', 'spam', 'lol', 'kek', 'foo', 'bar'];

export const forbiddenWordsMiddleware = ({ dispatch }) => (next) => (action) => {
    switch (action.type) {
        case CREATE_POST_SUCCESS:
            const found = forbidden.filter((word) => action.payload.title.includes(word));
            if (found.length) {
                return dispatch({
                    type: CREATE_POST_FAILURE,
                    payload: 'Вы спамер. Мы вас не звали, идите домой.',
                });
            }
        default:
            return next(action);
    }
};
