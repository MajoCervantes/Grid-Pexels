import { favsTypes } from "../types/favs.types";

const initialState = {
    favsData: []
};

export const favsReducer = (state = initialState, action) => {
    switch (action.type) {
        case favsTypes.ADD_FAVS:
            return {
                ...state,
                favData: action.payload.newFavData ? state.favsData.filter(item => item.id !== action.payload.info.id) : [ ...state.favsData, action.payload.info ]
            };

        default:
            return state;
    }
};