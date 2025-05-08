import Button from "../form/button"

const PlateCard = (nome, preco, imagem) => {
    return(
        <div>

            <h3>{nome}</h3>
            <img src={imagem} alt="Imagem do prato: Burritos mexicanos" />
            <p>{preco}</p>

            <Button label="Detalhe"/>

        </div>
    )
}

export default PlateCard;