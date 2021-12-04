import { sessionTypes } from "../types/session.types";

const initialState = {
    user: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case sessionTypes.LOGIN:
            return {
                ...state,
                user: action.payload
            };

        case sessionTypes.LOGOUT:
            return {
                user: null
            };

        default:
            return state;
    }
};
