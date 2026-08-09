import './index.css';

import Select from '../Select';
import Input from '../Input';


const flexDirection = [
    'row',
    'row-reverse',
    'column',
    'column-reverse'
]
const flexWrap = [
    'nowrap',
    'wrap',
    'wrap-reverse'
]
const justifyContent = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
]
const alignItems = [
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'first baseline',
    'last baseline'
]
const alignContent = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch'
]

import { useDispatch, useSelector } from 'react-redux';
import { itemsAdd, containerChange } from '../../actions';
import { selectContainer } from '../../selects';


const PanelContainer = () => {
    const dispatch = useDispatch();
    const container = useSelector(selectContainer);

    return (
        <div className='panel-container'>
            <button 
                type='button'
                onClick={ () => dispatch(itemsAdd()) }
                className='panel-container__button'>Add Item</button>
  
            <Input
                label={ "row-gap" }
                value={ container["row-gap"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("row-gap", value)) }
                type='text' />

            <Input
                label={ "column-gap" }
                value={ container["column-gap"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("column-gap", value)) }
                type='text' />

            <Select
                label={ "flex-direction" }
                value={ container["flex-direction"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("flex-direction", value)) }
                options={ flexDirection } />

            <Select
                label={ "flex-wrap" }
                value={ container["flex-wrap"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("flex-wrap", value)) }
                options={ flexWrap } />

            <Select
                label={ "justify-content" }
                value={ container["justify-content"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("justify-content", value)) }
                options={ justifyContent } />

            <Select
                label={ "align-items" }
                value={ container["align-items"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("align-items", value)) }
                options={ alignItems } />

            <Select
                label={ "align-content" }
                value={ container["align-content"] }
                onValueChange={ ({ target: { value }}) => dispatch(containerChange("align-content", value)) }
                options={ alignContent } />
        </div>
    );
};

export default PanelContainer;