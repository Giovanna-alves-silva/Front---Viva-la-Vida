import React from "react";
import Input from "../form/input";
import Button from "../form/button";
import styles from "./Cadastro.module.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro= () => {

    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const handlerLoginRedirect = () => {
        navigate('/login')
    }

    function handlerChangeInput (event){
        setUserData({...userData,[event.target.name]: event.target.value});
        console.log(userData);
    }

    function submit(event){
        event.preventDefault();
        console.log(userData)

        cadastrarUsuario(userData)
    }

    /* INSERÇÃO DE LIVRO */
    function cadastrarUsuario(user) {

        fetch('http://127.0.0.1:8000/cadastrarUsuario',{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Controle-Allow-Headers':'*'
            },
            body: JSON.stringify(user)
        }).then((response) => 
            response.json()
        ).then((respJSON) => {
            console.log('TESTE: ' + respJSON);
        }).catch((error)=> {
            console.log('ERRO: ' + error);
        })

    }

    return(
        <section className={styles.section}>
            <div className={styles.divForm}>

            <h1>CADASTRO</h1>
                <form onSubmit={submit}>

                    <Input
                        type='text'
                        name= 'email'
                        placeholder='E-mail'
                        id='email'
                        handlerChange={handlerChangeInput}
                    />

                    <Input
                        type='password'
                        name= 'senha'
                        placeholder='Senha'
                        id='senha'
                        handlerChange={handlerChangeInput}
                        />

                    <Input
                        type='password'
                        name= 'confirma_Senha'
                        placeholder='Confirmação da senha'
                        id='confirma_senha'
                        // handlerChange={handlerChangeInput}
                    />
                    
                    <Button
                        label = "Cadastrar" styleType="primary"
                    />

                    <Button
                        label = "Já possuo cadastro" onClick={handlerLoginRedirect} styleType="secondary" 
                    />

                </form>

            </div>
        
        </section>

    )
}

export default Cadastro;