// COMUNICAÇÃO COM A API;

async function ApiEstado() {

  try{
    const requisicao = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');

    const data = await requisicao.json();
    return data;

  } catch (error) {
    console.error("Erro de fetching", error);
  }
}

async function ApiCidadesPorEstado(estado) {
    try{
        const requisicao = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);

        const data = await requisicao.json();

        return data;
    } catch(error) {
        console.error("Erro de fetching", error)
    }
}

const api = {
ApiEstado,
ApiCidadesPorEstado,
}

export default api;
