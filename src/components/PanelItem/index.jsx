import './index.css';

import Input from '../Input';
import Select from '../Select';

const alignSelf = [
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
]

import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../../selects';
import { itemsChange } from '../../actions';


const PanelItem = () => {
    const items = useSelector(selectItems);
    const dispatch = useDispatch();
    const selected = items.find(({ select }) => select);
    
    const handleChange = (key) => ({ target: { value } }) => dispatch(itemsChange(key, value));

    if(!selected)
        return null;

    return (
        <div className='panel-item'>
            <Input
                label={ "order" }
                type='number'
                value={ selected.flexItem['order'] }
                onValueChange={ handleChange('order') } />

            <Input
                label={ "flex-grow" }
                type='number'
                value={ selected.flexItem['flex-grow'] }
                onValueChange={ handleChange('flex-grow') } />

            <Input
                label={ "flex-shrink" }
                type='number'
                value={ selected.flexItem['flex-shrink'] }
                onValueChange={ handleChange('flex-shrink') } />

            <Input
                label={ "flex-basis" }
                type='text'
                value={ selected.flexItem['flex-basis'] }
                onValueChange={ handleChange('flex-basis') } />

            <Select
                label={ 'align-self' }
                value={ selected.flexItem['align-self'] }
                onValueChange={ handleChange('align-self') }
                options={ alignSelf } />
        </div>
    );
};

export default PanelItem;