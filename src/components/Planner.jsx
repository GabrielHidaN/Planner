import React , {useState} from "react";
import NovaMeta from "./NovaMeta";

const Planner = () => {
    const [metas, setMetas] = useState([]);
    const [iconeSelecionado , setIconeSelecionado] = useState([""]);

    const adicionarMeta = (descricao) => {
        const novaMeta = {
            id: metas.length + 1,
            descricao,
            concluida: false,
            icone: iconeSelecionado,
        };
        setMetas([...metas, novaMeta]);
    };

    return (
        <div>
            <h1>Planejador de Hábitos</h1>
            <NovaMeta adicionarMeta={adicionarMeta} 
            icone={iconeSelecionado} 
            setIcone={setIconeSelecionado} 
            ></NovaMeta>

            <ul>
                {metas.map((meta) => (
                    <li key={meta.id}>
                        {meta.icone} {meta.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Planner;
