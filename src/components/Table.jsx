import { useEffect, useState } from "react"
import api from "../Services/Api"

function Table({estadoSelecionado, filtroCidade}) {
    const [cidades, setCidades] = useState([]);
    const [cidadesOriginais, setCidadesOriginais] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await api.ApiCidadesPorEstado(estadoSelecionado);
                setCidades(data);
                setCidadesOriginais(data); // Salva os dados originais
            } catch(error) {
                console.error("Erro ao obter dados das cidades", error);
            }
        }
        fetchData() 
    }, [estadoSelecionado]);

    useEffect(() => {
        // Aplica o filtro após o carregamento dos dados
        const cidadesFiltradas = filtroCidade
            ? cidadesOriginais.filter((cidade) =>
                cidade.nome.toLowerCase().includes(filtroCidade.toLowerCase())
            )
            : cidadesOriginais;
            setCidades(cidadesFiltradas);
      }, [filtroCidade, cidadesOriginais]);
    

    return (
        <div className="table flex justify-center text-center p-1.5">
            <table className="leading-4 mt-2.5">
                {cidades.map((cidade, posicao) => (
                          <tr className="leading-10 mt-1.5 p-5 text-pink" key={posicao}><td>{cidade.nome}</td></tr>
                        ))}
            </table>
        </div>
    )
};

export default Table;