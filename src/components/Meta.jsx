import React from 'react'




const Meta = (props)=>{ 
    return (
        <li>
            {props.meta.icone} 
            {props.meta.descricao}
        </li>
    );
}
export default Meta;