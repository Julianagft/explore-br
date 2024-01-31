import { useEffect, useState } from "react"
import api from "../Services/Api"

function Table({estadoSelecionado}) {
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await api.ApiCidadesPorEstado(estadoSelecionado);
                setCidades(data.slice(0, 12));
            } catch(error) {
                console.error("Erro ao obter dados das cidades", error);
            }
        }
        fetchData() 
    }, [estadoSelecionado]);

    return (
        <div className="table">
            <table>
                {cidades.map((cidade, posicao) => (
                          <tr key={posicao}><td>{cidade.nome}</td></tr>
                        ))}
            </table>
            <button className="bg-black">Próxima Pagina</button>
        </div>
    )
};

export default Table;