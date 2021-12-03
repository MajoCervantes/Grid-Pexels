import { favsTypes } from "../types/favs.types";

export const handleAddFavs = (info, newFavData) => {
    return {
        type: favsTypes.ADD_FAVS,
        payload: { info, newFavData }
    };
};