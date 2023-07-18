import React, {useEffect, useState} from "react";

export default function Use() {
    const [hiddenMessage, setHiddenMessage] = useState("")

    const handleClick = () => {
        console.log('Tu as cliqué')
    }
    useEffect(()=>{
        console.log('Message: ', hiddenMessage)
    }, [hiddenMessage])
    return (
        <div>
            <h1>Les uses</h1>
            <button onClick={handleClick}>handleClick</button>
            <br/>
            Voir le message caché en cliquant : <button onClick={()=>{setHiddenMessage('Voici le message caché')}}> ici</button>
            {hiddenMessage.length>0 ? hiddenMessage :''}
        </div>
    )
}
