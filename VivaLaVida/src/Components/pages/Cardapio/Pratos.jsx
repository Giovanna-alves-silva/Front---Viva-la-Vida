import Input from "../../form/input";
import InputDesc from "../../form/inputDesc";
import Button from "../../form/button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroPrato = () => {

  const [prato, setPrato] = useState({});

  const navigate = useNavigate();

  function handlerChangePrato(event) {
    setPrato({...prato, [event.target.name] : event.target.value});
    console.log(prato);
}

  // const handlerListRedirect = () => {
  //   navigate('')
  // }

  //ENVIO DOS DADOS PARA A API
  function submit(event) {
    event.preventDefault();
    console.log(prato);
    insertPrato(prato);
}  


/*INSERÇÃO DE LIVRO*/
function insertPrato(prato) {
  fetch('http://127.0.0.1:8000/pratos', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers':'*'
      },
      body:JSON.stringify(prato)
  }).then((response) => 
      response.json()
  ).then((respJSON)=> {
      console.log('RESPOSTA: ' + respJSON);
      navigate('/ListPratos');
  }).catch((error) =>{
      console.log('ERRO: ' + error);
  })

}

    return (
        <div>

          <h2>Cadastro de Pratos</h2>
          <form onSubmit={submit}>

          <Input 
            type='text'
            name='nome_prato'
            placeholder='Nome do prato'
            id='nome_prato'
            handlerChange={handlerChangePrato}
          />

          <Input 
            type='decimal'
            name='valor_prato'
            placeholder='Valor do prato'
            id='valor_prato'
            handlerChange={handlerChangePrato}
          />

          <InputDesc
            type="text"
            text="Descrição do prato"
            name="descricao"
            placeholder="Digite a descrição"
            id="descricao"
            handlerChange={handlerChangePrato}
          />

          <Button 
            label='Cadastrar' styleType='primary'
          />

          <Button 
            label='Voltar' styleType='secondary'
          />
        </form>
        </div>
    );

}  
  
export default CadastroPrato;
  