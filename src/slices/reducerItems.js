import {
    ITEMS_ADD,
    ITEMS_DELETE,
    ITEMS_CHANGE,
    ITEMS_SELECT
} from '../types';

const initialState = [];

const reducerItems = (state = initialState, action) => {
    switch(action.type) {
        case ITEMS_ADD: return [...state, action.payload];
        case ITEMS_DELETE: return state.filter(({ id }) => id != action.payload);
        case ITEMS_CHANGE: return state.map(item => {
            if(item.select)
                return { ...item, flexItem: { ...item.flexItem, [action.payload.key]: action.payload.value }};
            return item;
        })
        case ITEMS_SELECT: return state.map(item => {
            if(item.id == action.payload)
                return { ...item, select: !item.select };
            return { ...item, select: false };
        })
        default: return state;
    }
};

export default reducerItems;