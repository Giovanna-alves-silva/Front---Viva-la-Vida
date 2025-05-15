import Button from "../form/button";
import styles from "./cardPrato.module.css";

const ItemCard = ({ nome_prato, valor_prato, descricao_prato, imagem }) => {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={`Imagem de ${nome_prato}`} className={styles.imagem} />

      <div className={styles.info}>
        <h3 className={styles.nome}>{nome_prato}</h3>
        <p className={styles.descricao}>{descricao_prato}</p>
        {/* Exibe o valor já formatado, sem parse */}
        <p className={styles.valor}>{valor_prato}</p> 
        <div className={styles.buttons}>
          <Button label="Editar" styleType="third" />
          <Button label="Excluir" styleType="fourth" />
        </div>
      </div>
    </div>
  );
};


export default ItemCard;
