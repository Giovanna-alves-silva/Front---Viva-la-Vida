import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoriaSelect from '../../form/categoriaSelect';

function Cardapio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [categoria, setCategoria] = useState('pratos');

  useEffect(() => {
    const path = location.pathname.split('/')[2]; // 'pratos' ou 'listacardapio'
    if (path) setCategoria(path);
  }, [location.pathname]);

  const handleCategoriaChange = (e) => {
    const novaCategoria = e.target.value;
    setCategoria(novaCategoria);
    navigate(`/cardapio/${novaCategoria}`);
  };

  return (
    <div>
      <h1>Cardápio</h1>
      <CategoriaSelect value={categoria} onChange={handleCategoriaChange} />
      <Outlet context={{ setCategoria }} />
    </div>
  );
}

export default Cardapio;
