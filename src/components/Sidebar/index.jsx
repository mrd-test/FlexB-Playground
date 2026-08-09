import './index.css';

import Navbar from '../Navbar';
import PanelContainer from '../PanelContainer';
import PanelItem from '../PanelItem';
import { useSelector } from 'react-redux';
import { selectNavbarValue } from '../../selects';

const Sidebar = () => {
    const navbar = useSelector(selectNavbarValue);

    return (
        <aside className='sidebar'>
            <Navbar />
            { navbar == 'container' ? <PanelContainer /> : <PanelItem /> }
        </aside>
    );
};

export default Sidebar;