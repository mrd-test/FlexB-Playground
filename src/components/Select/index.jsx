import './index.css';

const Select = ({
    label,
    options,
    value,
    onValueChange
}) => {
    return (
        <div className='select'>
            <span className='select__label'>{ label }</span>
            <select
                value={ value }
                onChange={ onValueChange }
                className='select__item'>
                {
                    options.map((option) => (
                        <option
                            key={ option }
                            className='select__option'>
                            { option }
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;