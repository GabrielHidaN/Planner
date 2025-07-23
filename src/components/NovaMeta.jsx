import { useState } from "react"
import SeletorDeIcone from "./SeletorDeIcone";

const NovaMeta = (props) => {
    const [novaMeta, setNovaMeta] = useState("");

    const adicionarMeta = () => {

        if(novaMeta.trim() !== "") {
            props.adicionarMeta(novaMeta);
            setNovaMeta(""); // Limpa o campo de entrada após adicionar a meta
        }
        
    };

    return (
        <div >
            <input type="text"
            value={novaMeta}
            placeholder='Digite a descrição da meta'
            onChange={(e) => setNovaMeta(e.target.value)}
            />
            <SeletorDeIcone setIconeSelecionado={props.setIcone} />
            <button onClick={adicionarMeta}>Adicionar</button>
        </div>
    );
}
export default NovaMeta;