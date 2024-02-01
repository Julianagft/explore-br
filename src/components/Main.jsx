  'use client'

import Select from './Select';

function Main() {
    return (
      <main className='flex justify-center py-10 h-2/3 bg-purple'>
        <section className='flex flex-col justify-center gap-4 w-4/5 md:w-3/4'>
          <div className=' flex flex-col gap-4 text-center'>
            <h2 className='text-green text-lg md:text-2xl font-black'> Bem vindo Ao Explore-BR, um serviço de exploração de municípios brasileiros!</h2>
            <p className='text-base md:text-lg font-bold'>Selecione abaixo um estado e verifique todos os municípios pertencentes a ele.</p>
          </div>
          <div className='bg-gray flex-1 overflow-y-auto p-2 rounded-xl'>
            <Select />
          </div>
        </section>
      </main>
    );
  }
  
  
export default Main;