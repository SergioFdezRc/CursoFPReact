import {
    USER_ACTION_REQUEST_FAILED,
    USER_ACTION_REQUEST_STARTED,
    USER_ACTION_REQUEST_SUCCESS
} from "../constants/user.actionTypes";

const userActionRequestStarted = (query) => ({
    type: USER_ACTION_REQUEST_STARTED,
    payload: query
});

const userActionRequestSuccess = (usersInfo) => ({
    type: USER_ACTION_REQUEST_SUCCESS,
    payload: {usersInfo}
});

const userActionRequestFailed = (error) => ({
    type: USER_ACTION_REQUEST_FAILED,
    payload: {error}
});

export {
    userActionRequestStarted,
    userActionRequestSuccess,
    userActionRequestFailed
}