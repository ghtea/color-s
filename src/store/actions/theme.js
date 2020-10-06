//
export const REPLACE_THEME = 'REPLACE_THEME';

export const return_REPLACE_THEME = (payload) => {
    return {
        type: REPLACE_THEME,
        payload: payload
    }
};



// adjustNewPaletteToTheme

export const ADJUST_NEW_PALETTE_TO_THEME = 'ADJUST_NEW_PALETTE_TO_THEME';

export const return_ADJUST_NEW_PALETTE_TO_THEME = (payload) => {
    return {
        type: ADJUST_NEW_PALETTE_TO_THEME,
        payload: payload
    }
};
