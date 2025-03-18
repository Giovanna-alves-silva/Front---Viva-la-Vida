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
    }

    return(
        <section className={styles.section}>
            <div className={styles.divForm}>

            <h1>CADASTRO</h1>
                <form>

                    <Input
                        type='text'
                        name= 'txt_email'
                        placeholder='E-mail'
                        id='txt_email'
                        handlerChange={handlerChangeInput}
                    />

                    <Input
                        type='password'
                        name= 'txt_senha'
                        placeholder='Senha'
                        id='txt_senha'
                        handlerChange={handlerChangeInput}
                    />

                    <Input
                        type='password'
                        name= 'txt_confirma_Senha'
                        placeholder='Confirmação da senha'
                        id='txt_confirma_senha'
                        handlerChange={handlerChangeInput}
                    />
                    
                    <Button
                        label = "Cadastrar" styleType="primary" onClick={submit}
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