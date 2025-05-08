import Input from "../../form/input";
import InputDesc from "../../form/inputDesc";
import Button from "../../form/button";

function Bebidas() {
    return (
      <form action="">
        <div>

          <h2>Cadastro de Bebidas</h2>

          <Input 
            type='text'
            name='nome_prato'
            placeholder='Nome da bebida'
            id='nome_prato'
          />

          <Input 
            type='decimal'
            name='valor_prato'
            placeholder='Valor da bebida'
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
  
export default Bebidas;
  