import React from "react";
import styles from './listaCardapio.module.css';

import { useState, useEffect } from "react";

import PratoCard from "./../../layout/cardPrato";

const ListPratos = () => {

    const [prato, setPrato] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/listaCardapio', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
            .then((resp) => resp.json())
            .then((pratoData) => {
                console.log(pratoData.data);
                setPrato(pratoData.data);
            })
            .catch((err) => { console.log(err) });

    }, []);

    return (
        <section>
            <h1>LISTA CARDÁPIO</h1>

            <Container>

                {
                    prato.map((prato) => ( 
                        <PratoCard
                            nome_livro= {book.nome_livro}
                            autor_livro= {book.autor_livro}
                            imagem={caverna}
                            key={book.cod_livro}
                        />
                    ))
                }
            </Container>

        </section>
    )
}

export default ListPratos;