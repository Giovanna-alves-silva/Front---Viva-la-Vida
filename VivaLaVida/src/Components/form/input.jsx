import style from './input.module.css'

function Input({type, name, placeholder, id, value, handlerChange}){
return (

    <div>
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