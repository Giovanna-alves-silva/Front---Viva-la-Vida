import React from "react";
import { useState, useEffect } from "react";
import styles from './listaCardapio.module.css';
import burritos from '../../../assets/burritos-mexicanos.png'
import ItemCard from "../../layout/cardPrato";
import ContainerPrato from "../../layout/ContainerPrato";



function ListaCardapio() {

    const [itens, setItens] = useState([]);

    useEffect (()=> {

        fetch('http://localhost:8000/listagemItens', {
            method: 'GET',
            mode : 'cors',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
        .then((resp)=> resp.json())
        .then((itemData)=> {
            console.log(itemData.data);
            setItens(itemData.data);
        })
        .catch((err)=> {console.log(err)});

    },[]);


    return(

        <section>

            <h1 className={styles.subTitle}>Itens do cardápio</h1>

            <ContainerPrato>

                {
                    itens.map((item)=> (
                        
                        
                        <ItemCard
                            key={item.id_prato}
                            nome_prato={item.nome_prato}
                            descricao_prato={item.descricao_prato}
                            valor_prato={item.valor_prato}
                            imagem={burritos}
                            cod_item={item.id_prato}
                        />
                        
                    ))
                }

            </ContainerPrato>
            

        </section>

    )
}

export default ListaCardapio;