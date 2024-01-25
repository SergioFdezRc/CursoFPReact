import {
    USER_ACTION_REQUEST_FAILED,
    USER_ACTION_REQUEST_STARTED,
    USER_ACTION_REQUEST_SUCCESS
} from "../constants/user.actionTypes";

const INITIAL_STATE = {
    user: null,
    isLoading: false,
    error: null
}

const applyGetUserStarted = (state, action) => ({
    ...state,
    user: null,
    isLoading: true
});

const applyGetUserSuccess = (state, action) => ({
    ...state,
    user: action.payload.usersInfo || sessionStorage.getItem("user"),
    isLoading: false
})

const applyGetUserFailed = (state, action) => ({
    ...state,
    user: null,
    isLoading: false,
    error: action.payload.error
});


function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_ACTION_REQUEST_STARTED: {
            return applyGetUserStarted(state, action);
        }
        case USER_ACTION_REQUEST_SUCCESS: {
            return applyGetUserSuccess(state, action);
        }
        case USER_ACTION_REQUEST_FAILED: {
            return applyGetUserFailed(state, action);
        }
        default: return state;
    }
}

export default userReducer;