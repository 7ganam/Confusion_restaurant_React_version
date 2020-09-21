import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { errMess: null, feedback: null }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return { ...state, errMess: null, feedback: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        default:
            return state;
    }
};