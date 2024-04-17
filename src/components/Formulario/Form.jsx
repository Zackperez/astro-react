import React from 'react'
import { useState } from 'react'
import './FormularioEstilos.module.css'

export default function Form() {

  return (
    
    <form action="" className='flex flex-col max-w-sm mx-auto shadow-lg bg-white py-2 px-15'>
      <div className='text-sm'>
        <label htmlFor="Name">Nombre</label>
      </div>
      <div>
        <input className='border w-64' type="text" />

      </div>

      <label htmlFor="Name">Contrase;a</label>
      <input className='border w-64' type="password" />

      <button type='submit' className='py-2 px-5 w-24 mx-auto bg-slate-300 rounded-lg hover:bg-slate-400'>
        hola
      </button>
    </form>
  )
}
