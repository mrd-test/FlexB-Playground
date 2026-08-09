import { v4 } from 'uuid';
import { 
    NAVBAR_SET_VALUE,
    ITEMS_ADD,
    ITEMS_DELETE,
    ITEMS_CHANGE,
    ITEMS_SELECT,
    CONTAINER_CHANGE
} from "./types";

export const navbarSetValue = (value) => ({ type: NAVBAR_SET_VALUE, payload: value });

export const itemsAdd = () => ({
    type: ITEMS_ADD,
    payload: {
        id: v4(),
        select: false,
        flexItem: {
            'order': 0,
            'flex-grow': 0,
            'flex-shrink': 1,
            'flex-basis': 'auto',
            'align-self': 'auto'
        }
    } 
});

export const itemsDelete = (id) => ({ type: ITEMS_DELETE, payload: id });
export const itemsSelect = (id) => ({ type: ITEMS_SELECT, payload: id });
export const itemsChange = (key, value) => ({ type: ITEMS_CHANGE, payload: { key, value }});

export const containerChange = (key, value) => ({ type: CONTAINER_CHANGE, payload: { key, value }});