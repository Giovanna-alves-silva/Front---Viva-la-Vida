import React from "react";
import Input from "../form/input";
import Button from "../form/button";
import style from './login.module.css'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login= () => {

    const [userLogin, setUserLogin] = useState({});

    const navigate = useNavigate();

    const handlerCadastroRedirect = () => {
        navigate('/cadastro')
    }

    function handlerChangeInput(event) {
        setUserLogin({...userLogin,[event.target.name] : event.target.value})
    }

    function submit(event){
        event.preventDefault();
        console.log(userLogin)
    }

    return(
        <section className={style.section}>

            <div className={style.divForm}>
                
                <h1>Acessar minha conta</h1>

                <form>

                    <Input
                        type='text'
                        name= 'txt_email'
                        placeholder='E-mail'
                        id='txt_email'
                        handlerChange={handlerChangeInput}
                    />

                    <Input
                        type='text'
                        name= 'txt_senha'
                        placeholder='Senha'
                        id='txt_senha'
                        handlerChange={handlerChangeInput}
                    />
                    
                    <p>Esqueci a senha</p>
                    
                    <Button
                        label = "Login" styleType="primary" onClick={submit}
                    />

                    <Button
                        label = "Não possuo cadastro" onClick={handlerCadastroRedirect} styleType="secondary" 
                    />

                </form>

            </div>
        
        </section>

    )
}

export default Login;