import style from './inputDesc.module.css';

function InputDesc({ type, text, name, placeholder, id, value, handlerChange }) {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handlerChange}
        className={style.input}
      ></textarea>
    </div>
  );
}

export default InputDesc;
