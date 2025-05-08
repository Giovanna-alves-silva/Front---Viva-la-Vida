import style from './categoriaSelect.module.css'

function CategoriaSelect({ onChange }) {
    return (

      <select onChange={onChange} defaultValue="pratos">

        <option value="pratos">Pratos</option>
        <option value="bebidas">Bebidas</option>
        <option value="listacardapio">Listar cardápio</option>

      </select>

    );
  }
  
export default CategoriaSelect;
  