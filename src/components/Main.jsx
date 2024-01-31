  'use client'

import Select from './Select';

function Main() {
    return (
      <main className='flex justify-center py-10 h-2/3 bg-red-700'>
        <section className='flex flex-col gap-4'>
          <div className=''>
            <h2> Bem vindo Ao Explore-BR, um serviço de exploração de municípios brasileiros!</h2>
            <p>Selecione abaixo um estado e verifique todos os municípios pertencentes a ele  </p>
          </div>
          <div className='bg-white'>
            <Select />
          </div>
        </section>
      </main>
    );
  }
  
  
export default Main;