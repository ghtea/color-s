//
export const REPLACE_COLOR = 'REPLACE_COLOR';

export const return_REPLACE_COLOR = (payload) => {
    return {
        type: REPLACE_COLOR,
        payload: payload
    }
};




//
export const SPREAD_HSL = 'SPREAD_HSL';
export const SPREAD_RGB = 'SPREAD_RGB';
export const SPREAD_TEXT = 'SPREAD_Text';

export const return_SPREAD_HSL = (payload) => {
    return {
        type: SPREAD_HSL,
        payload: payload
    }
};
export const return_SPREAD_RGB = (payload) => {
    return {
        type: SPREAD_RGB,
        payload: payload
    }
};
export const return_SPREAD_TEXT = (payload) => {
    return {
        type: SPREAD_TEXT,
        payload: payload
    }
};

