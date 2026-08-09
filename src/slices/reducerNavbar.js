import { NAVBAR_SET_VALUE } from "../types";

const initialState = 'container';

const reducerNavbar = (state = initialState, action) => {
    switch(action.type) {
        case NAVBAR_SET_VALUE: return action.payload;
        default: return state;
    }
};

export default reducerNavbar;