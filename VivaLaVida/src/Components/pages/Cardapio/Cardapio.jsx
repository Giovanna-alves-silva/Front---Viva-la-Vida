import { useNavigate } from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import CategoriaSelect from '../../form/categoriaSelect';

function Cardapio() {
  const navigate = useNavigate();

  const handleCategoriaChange = (e) => {
    const categoria = e.target.value;
    if (categoria) {
      navigate(`/cardapio/${categoria}`);
    }
  };

  return (
    <div>
      <h1>Cardápio</h1>
      <CategoriaSelect onChange={handleCategoriaChange} />
      <Outlet />
    </div>
  );
}

export default Cardapio;
