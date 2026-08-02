import React from 'react'

const Error = ({message,refetch}) => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col gap-5'>
      <h1>Üzgünüz ama bir sorun oluştu
        <p className='text-red-500'>{message}</p>
        <button onClick={refetch} className='px-2 py-1 border roımded-smh'>
          Tekrar Dene
        </button>
      </h1>
    </div>                
  )
}

export default Error