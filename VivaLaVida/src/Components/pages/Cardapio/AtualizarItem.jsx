
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import style from './AtualizarItem.module.css'
import Input from '../../form/input'
import Button from '../../form/button'

const AtualizarItem = () => {

        const [item, setItem] = useState({});

        const {id_item} = useParams();

        const navigate = useNavigate();

        function handlerChangeItem(event) {
                setItem({...item, [event.target.name] : event.target.value});
                console.log(item)
        }

        useEffect(()=>{

                fetch(`http://localhost:8000/listagemItens/${id_item}`, {
                method: 'GET',
                mode:'cors',
                headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        console.log('ITENS: ' + data.data.id_item);
                        setItem(data.data);
                        // console.log('STATE: ' + item.nome_prato);
                })
                .catch((err)=>{console.log(err)});

        }, []);

        function updateItem(item) {
        
                console.log(JSON.stringify(item))
        
                fetch('http://localhost:8000/alterarItem', {
                        method:'PUT',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(item)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                                console.log(data);
                                navigate('/cardapio/listacardapio',{state:'ITEM ALTEARADO COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        function submit(event) {
                event.preventDefault();
                updateItem(item);
        }

        return (
                <section className={style.create_book_container}>
                        
                        <h1>ALTERAÇÃO DE ITENS DO CARDÁPIO</h1>

                        <form onSubmit={submit}>

                                <Input 
                                        type='text'
                                        name='nome_prato'
                                        id='nome_prato'
                                        placeholder='Digite o nome do item do cardápio'
                                        handlerChange={handlerChangeItem}
                                        value={item.nome_prato || ''} 
                                />

                                <Input 
                                        type='text'
                                        name='valor_prato'
                                        id='valor_prato'
                                        placeholder='Digite o valor do item'
                                        handlerChange={handlerChangeItem}
                                        value={item.valor_prato || ''} 
                                />

                                <Input 
                                        type='text'
                                        name='descricao_prato'
                                        id='descricao_item'
                                        placeholder='Digite uma descrição para o item'
                                        handlerChange={handlerChangeItem}
                                        value={item.descricao_prato || ''} 
                                />

                                <Button label='Editar Item'/>

                        </form>

                </section>
        )
        }

export default AtualizarItem
