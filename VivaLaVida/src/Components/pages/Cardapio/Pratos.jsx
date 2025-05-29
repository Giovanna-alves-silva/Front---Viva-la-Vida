import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { NumericFormat } from 'react-number-format';

import style from './pratos.module.css';
import Input from "../../form/input";
import InputDesc from "../../form/inputDesc";
import Button from "../../form/button";

const CadastroPrato = () => {
  const [prato, setPrato] = useState({});
  const navigate = useNavigate();
  const { setCategoria } = useOutletContext();

  function handlerChangePrato(event) {
    setPrato({ ...prato, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    insertItem(prato);
  }

  function insertItem(prato) {
    fetch('http://localhost:8000/cadastrarPratos', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(prato)
    })
      .then((response) => response.json())
      .then((respJSON) => {
        console.log('RESPOSTA: ' + respJSON);

        setCategoria('listacardapio');
        navigate('/cardapio/listacardapio');
      })
      .catch((error) => {
        console.log('ERRO: ' + error);
      });
  }

  return (
    <section>
      <h2 className={style.subTitle}>Cadastro de itens do cardápio</h2>
      <form onSubmit={submit}>
        <Input
          type='text'
          name='nome_prato'
          placeholder='Nome do item do cardápio'
          id='nome_prato'
          handlerChange={handlerChangePrato}
        />

        <div className={style.input_container}>
          <NumericFormat
            id="valor_prato"
            name="valor_prato"
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$ "
            allowNegative={false}
            decimalScale={2}
            fixedDecimalScale
            className={style.input}
            placeholder="Valor do item"
            onValueChange={(values) => {
              const { value } = values; // valor sem máscara, como '19.90'
              setPrato({ ...prato, valor_prato: parseFloat(value).toFixed(2) });
            }}
          />
        </div>

        <InputDesc
          type="text"
          text="Descrição do item"
          name="descricao_prato"
          placeholder="Digite a descrição"
          id="descricao"
          handlerChange={handlerChangePrato}
        />

        <Button label='Cadastrar' styleType='primary' />
      </form>
    </section>
  );
};

export default CadastroPrato;
