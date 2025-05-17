import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import style from './DescricaoItem.module.css'
import Button2 from '../../Button'

import burritos from '../../../assets/burritos-mexicanos.png'

const DescricaoItem = () => {

    const {cod_item} = useParams();
    console.log('ID:' + cod_item);

    const[item, setItem] = useState({});

    useEffect(()=>{

        fetch(`http://localhost:8000/listagemItens/${cod_item}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setItem(data.data);
            console.log(data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return (
        <div>

            <h1 className={style.desc}>Descrição do item:</h1>
        
            <div className={style.containerDesc}>
                
                <div className={style.container_img}>
                    <img className={style.img_book_detail} src={burritos} alt='Imagem do item' />
                </div>

                <div className={style.info}>

                    <span className={style.titulo}>{item.nome_prato}</span>

                    <span className={style.descricao}>
                        {item.descricao_prato}
                    </span>

                    <div className={style.container_buttons}>
                        <Button2 
                            label='EDITAR'
                            router='/atualizarItem/'
                            cod_livro={item.cod_item}
                            
                            />

                        <Button2
                            label='EXCLUIR'
                            router='/excluirItem'
                            cod_livro={item.cod_item}
                            />

                    </div>

                </div>

            </div>
        </div>
    )

}

export default DescricaoItem