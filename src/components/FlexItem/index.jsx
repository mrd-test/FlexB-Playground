import './index.css';
import { LuTrash2 } from "react-icons/lu";

import { useDispatch } from 'react-redux';
import { 
    itemsDelete, 
    itemsSelect,
    navbarSetValue
} from '../../actions';

const FlexItem = ({
    id,
    index,
    select,
    flexItem
}) => {
    const dispatch = useDispatch();
    const handleNavbar = () => {
        dispatch(itemsSelect(id)); 
        if(!select) {
            dispatch(navbarSetValue('items'));
        }
    };
       
    return (
        <div className='flex-item' style={{ ...flexItem }}>
            <div className='flex-item__block'>
                { select && <div className='flex-item__divider'></div> }
                <span className='flex-item__text'>{ `index: ${index}` }</span>
                <button 
                    type='button'
                    onClick={ handleNavbar }
                    className='flex-item__edit'>{ select ? "done" : "edit" }</button>
            </div>
            <button 
                type='button'
                onClick={ () => dispatch(itemsDelete(id)) }
                className='flex-item__delete'>
                <LuTrash2 className='flex-item__delete-svg'/>
            </button>
        </div>
    );
};

export default FlexItem;