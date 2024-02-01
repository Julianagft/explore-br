
import { useEffect, useState } from "react"
import api from "../Services/Api"
import Table from "./Table";

 const Select = () => {

    const [estado, setEstado] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState(null)

    useEffect( () => {
        async function fetchData() {
            try {
                const data = await api.ApiEstado();
                setEstado(data);
            } catch(error) {
                console.error("Erro ao obter dados dos estados", error);
            }
        }
        fetchData()
    }, []);

    const mudaEstado = async (evento) => {
      const valorEstadoSelecionado = evento.target.value;
      setEstadoSelecionado(valorEstadoSelecionado);
    }
       
    return (
    <div className='card'>
      <div className="fixed">
        <label htmlFor="estadosSelect">Estados do País:</label>
        <select defaultValue={null} onChange={mudaEstado}>
            <option value={null}>Selecione</option>
            {estado.map((estado, posicao) => (
              <option key={posicao} value={estado.sigla}>
                {`${estado.nome} - ${estado.sigla}`}
              </option>
            ))}
        </select>
      </div>
      <div className="overflow-y-auto flex-1">
        {estadoSelecionado && <Table estadoSelecionado={estadoSelecionado} />}   
      </div>
         
    </div>
    )
}

export default Select;