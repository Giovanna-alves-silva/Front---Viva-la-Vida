import style from './categoriaSelect.module.css';

function CategoriaSelect({ value, onChange }) {
  return (
    <select onChange={onChange} value={value}>
      <option value="pratos">Cadastrar itens</option>
      <option value="listacardapio">Listar itens do cardápio</option>
    </select>
  );
}

export default CategoriaSelect;

