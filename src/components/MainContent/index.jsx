import './index.css';
import FlexItem from '../FlexItem';
import { useSelector } from 'react-redux';
import { selectItems, selectContainer } from '../../selects';


const replaceMinus = (obj) => Object.fromEntries(Object.entries(obj)
                                    .map(([key, value]) => [key.replace(/(-[a-z])/, (s) => `${s[1].toUpperCase()}`), value]))

const MainContent = () => {
    const items = useSelector(selectItems);
    const container = useSelector(selectContainer);
    
    return (
        <main className='main-content' style={ {...replaceMinus(container)} }>
            {
                items.map((item, index) => (
                    <FlexItem
                        key={ item.id }
                        id={ item.id }
                        index={ index }
                        select={ item.select }
                        flexItem={ replaceMinus(item.flexItem) } />
                ))
            }
            
        </main>
    );
};

export default MainContent;