import style from './input.module.css'

function Input({type, text, name, placeholder, id, value, handlerChange}){
return (

    <div>
        <label htmlFor={name}>{text}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={handlerChange}
        />
    </div>
)};

export default Input;