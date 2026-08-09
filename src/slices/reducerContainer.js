import { CONTAINER_CHANGE } from "../types";

const initialState = {
    'row-gap': '16px',
    'column-gap': '16px',
    'flex-direction': 'row',
    'flex-wrap': 'nowrap',
    'justify-content': 'flex-start',
    'align-items': 'flex-start',
    'align-content': 'flex-start'
};

const reducerContainer = (state = initialState, action) => {
    switch(action.type) {
        case CONTAINER_CHANGE: return {
            ...state,
            [action.payload.key]: action.payload.value
        }
        default: return state;
    }
};

export default reducerContainer;