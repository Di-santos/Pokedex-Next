import {useState} from 'react';

export default function StateInput(){
    const [content,setContent] = useState("")


    return (
        <div>
            <input type="text" placeholder="Digite o Pokémon aqui" onChange={event => setContent(event.target.value)} ></input>
        </div>
    )
}