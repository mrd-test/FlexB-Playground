import './index.css';

const Input = ({
    label,
    value,
    onValueChange,
    type = 'text'
}) => {
    return (
        <div className='input'>
            <span className='input__label'>{ label }</span>
            <input 
                type={ type }
                value={ value }
                onChange={ onValueChange }
                className='input__input' />
        </div>
    );
};

export default Input;