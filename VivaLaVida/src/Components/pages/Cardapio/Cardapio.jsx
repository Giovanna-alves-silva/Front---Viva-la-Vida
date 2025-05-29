import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoriaSelect from '../../form/categoriaSelect';

function Cardapio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [categoria, setCategoria] = useState('pratos');

  useEffect(() => {
    const segments = location.pathname.split('/'); // ['/cardapio', 'descricaoItem', '1'] por exemplo
    if (segments[2] && segments[2] !== 'descricaoItem') {
      setCategoria(segments[2]);
    }
  }, [location.pathname]);

  // Aqui a lógica para esconder o select se estiver na rota descricaoItem
  const esconderSelect = location.pathname.includes('/descricaoItem/') || location.pathname.includes('/alterarItem/');


  const handleCategoriaChange = (e) => {
    const novaCategoria = e.target.value;
    setCategoria(novaCategoria);
    navigate(`/cardapio/${novaCategoria}`);
  };

  return (
    <div>
      <h1>Cardápio</h1>
      {!esconderSelect && <CategoriaSelect value={categoria} onChange={handleCategoriaChange} />}
      <Outlet context={{ setCategoria }} />
    </div>
  );
}

export default Cardapio;
