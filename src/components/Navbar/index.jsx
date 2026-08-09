import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectNavbarValue } from '../../selects';
import { navbarSetValue } from '../../actions';

const Navbar = () => {
    const dispatch = useDispatch();
    const navbar = useSelector(selectNavbarValue);

    return (
        <nav className='navbar'>
            <button 
                type='button'
                onClick={ () => dispatch(navbarSetValue('container')) }
                className={`navbar__button${navbar == 'container' ? ' navbar__button_active' : ''}`}>container</button>
            <button 
                type='button'
                onClick={ () => dispatch(navbarSetValue('items')) }
                className={`navbar__button${navbar == 'items' ? ' navbar__button_active' : ''}`}>items</button>
        </nav>
    );
};

export default Navbar;