import { useEffect, useState } from "react"
import api from "../Services/Api"

function Table({estadoSelecionado}) {
    const [cidade, setCidade] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await api.ApiCidadesPorEstado(estadoSelecionado);
                setCidade(data);
            } catch(error) {
                console.error("Erro ao obter dados das cidades", error);
            }
        }

        fetchData() 
    }, [estadoSelecionado]);

    const cidadesFiltradas = cidade.filter((UF) => UF.sigla);
    console.log(cidadesFiltradas);

    return (
        <div className="table">
            <table>
                {
                    cidadesFiltradas.length > 0 ? (
                        cidadesFiltradas.map((cidade, posicao) => (
                          <tr key={posicao}><td>{cidade.nome}</td></tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="1">Nenhuma cidade encontrada para o estado selecionado.</td>
                        </tr>
                      )
                }
            </table>
        </div>
    )
};

export default Table;