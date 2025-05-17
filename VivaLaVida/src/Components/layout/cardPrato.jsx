import Button from "../form/button";
import Button2 from "../Button";
import styles from "./cardPrato.module.css";

const ItemCard = ({ nome_prato, valor_prato, descricao_prato, imagem, cod_item }) => {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={`Imagem de ${nome_prato}`} className={styles.imagem} />

      <div className={styles.info}>
        <h3 className={styles.nome}>{nome_prato}</h3>
        <p className={styles.descricao}>{descricao_prato}</p>
        {/* Exibe o valor já formatado, sem parse */}
        <p className={styles.valor}>{valor_prato}</p> 
        <div className={styles.buttons}>
          <Button2 
            label='Detalhe'
            router='/cardapio/descricaoItem/'
            cod_item={cod_item}
          />
        </div>
      </div>
    </div>
  );
};


export default ItemCard;
