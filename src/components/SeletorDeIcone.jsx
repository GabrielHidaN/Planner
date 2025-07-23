import React from 'react'
import Planner from './Planner';

const SeletorDeIcone = (props)=>{
    const icones = ["🍎", "🍌", "🍇", "🍉"];
    return (
        <div>{
            icones.map( (icone , i) => (
                <button key={i} onClick={()=> props.setIconeSelecionado(icone)}>
                    {icone} 
                </button>
            ))} 
        </div>);
};

export default SeletorDeIcone;