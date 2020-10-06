//
export const REPLACE_AUTH = 'REPLACE_AUTH';

export const return_REPLACE_AUTH = (payload) => {
    return {
        type: REPLACE_AUTH,
        payload: payload
    }
};


export const LOG_IN = 'LOG_IN';

export const return_LOG_IN = (payload) => {
    return {
        type: LOG_IN,
        payload: payload
    }
};


export const CHECK_LOGGED_IN = 'CHECK_LOGGED_IN';

export const return_CHECK_LOGGED_IN = (payload) => {
    return {
        type: CHECK_LOGGED_IN,
        payload: payload
    }
};

