import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeletarItem() {

    const {id_item} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8000/deletarItem/${id_item}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/cardapio/listacardapio',{state:'ITEM EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <div>
            {/* <h1>TESTEDE EXCLUSÃO DE ITEM</h1> */}
        </div>
    )
}

    export default DeletarItem;
