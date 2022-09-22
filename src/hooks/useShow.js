import React, { useEffect, useState } from 'react'

const useShow = () => {

  const [mostrar, setMostrar] = useState(true)

  const mostrarFoto = (e) => {
    const boton = document.getElementById(e)
    if (boton.style.display === "none") {
      boton.style.display = "block"
    }
    else {
      boton.style.display = "none"
    }
    setMostrar(true);

  }

  return {
    mostrar,
    mostrarFoto,

  }
}

export default useShow;