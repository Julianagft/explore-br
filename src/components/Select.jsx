
import { useEffect, useState } from "react"
import api from "../Services/Api"
import Table from "./Table";

 const Select = () => {

    const [estado, setEstado] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState(null)
    const [filtroCidade, setFiltroCidade] = useState('');

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
    <div className='card flex flex-col justify-center'>
        <div className="flex justify-center">
          <label htmlFor="estadosSelect" className="rounded-lg p-0.5 text-pink font-bold mx-2">Estados do País:</label>
            <select className="rounded-lg p-0.5 w-44 text-pink font-bold mx-2" defaultValue={null} onChange={mudaEstado}>
              <option value={null}>Selecione</option>
              {estado.map((estado, posicao) => (
                <option key={posicao} value={estado.sigla}>
                  {`${estado.nome} - ${estado.sigla}`}
                </option>
              ))}
            </select>
            <input className="rounded-lg p-0.5 text-pink mx-2" type="text" onChange={(e) => setFiltroCidade(e.target.value)} placeholder="Cidade desejada" />
        </div>
      
        <div className="flex justify-center">
          {estadoSelecionado && <Table estadoSelecionado={estadoSelecionado} filtroCidade={filtroCidade} />}
        </div>    
    </div>
    )
}

export default Select;