import Input from "../../form/input";
import InputDesc from "../../form/inputDesc";
import Button from "../../form/button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroPrato = () => {

  const [pratoData, setPratoData] = useState({});

  const navigate = useNavigate();

  const handlerListRedirect = () => {
    navigate('')
  }

}

function Pratos() {
    return (
      <form action="">
        <div>

          <h2>Cadastro de Pratos</h2>

          <Input 
            type='text'
            name='nome_prato'
            placeholder='Nome do prato'
            id='nome_prato'
          />

          <Input 
            type='decimal'
            name='valor_prato'
            placeholder='Valor do prato'
            id='valor_prato'
          />

          <InputDesc
            type="text"
            text="Descrição do prato"
            name="descricao"
            placeholder="Digite a descrição"
            id="descricao"
          />

          <Button 
            label='Cadastrar' styleType='primary'
          />

          <Button 
            label='Voltar' styleType='secondary'
          />

        </div>
      </form>
    );
  }
  
export default Pratos;
  