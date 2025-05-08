import Button from "../form/button"

const PratoCard = ({nome_prato, preco_prato, imagem}) => {
    return(
        <div>

            <h3>{nome_prato}</h3>
            <img src={imagem} alt="Imagem do prato: Burritos mexicanos" />
            <p>{preco_prato}</p>

            <Button label="Detalhe"/>

        </div>
    )
}

export default PratoCard;