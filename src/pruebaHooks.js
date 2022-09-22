import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from '../src/styles/fotos.module.css'

import useShow from './hooks/useShow'

const Fotos = () => {
  const { mostrar, mostrarFoto } = useShow()
  const [fotos, setFotos] = useState()

  useEffect(() => {
    const endPoint = 'https://jsonplaceholder.typicode.com/photos/'

    axios.get(endPoint).then(res => {
      const apiData = res.data
      setFotos(apiData)
    })
      .catch(err => {
        alert("se rompio todo", err)
      })
  }, [])

  const fotosSlice = fotos?.slice(0, 4)

  return (
    <div >
      <h1>FOTOS</h1>
      <div className={s.contenedor}>
        {fotosSlice?.map((e) =>
          <div key={e.id}>
            <div className={s.fotos}>
              <img id={e.id} src={e.url} />
              <button onClick={() => mostrarFoto(e.id)}>toggle</button>
            </div>
          </div>
        )
        }
      </div>

    </div>
  )
}

export default Fotos