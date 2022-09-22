import React from 'react'
import '../styles/bootstrap.min.css'

const Home = () => {
  return (
    <div className="container-fluid">

      <h1 className="text-center bg-primary text-white">Star Wars Character App</h1>
      <p className='text-center bg-primary text-white'>Find your favourite character from <span className='bg-danger'>Star Wars</span> and know all their details.</p>

      <div>
        <ul>
          <td className='table-primary'>Nombre: { }</td>
        </ul>
      </div>


      <aside>
        <ul className='row'>
          <li>Name: { }</li>
          <li>Height: { }</li>
          <li>Mass: { }</li>
          <li>Hair Color: { }</li>
          <li>Skin Color: { }</li>
          <li>Eye Color: { }</li>
          <li>Birth Year: { }</li>
          <li>Gender: { }</li>
          <li>Films: { }</li>
          <li>Species: { }</li>
        </ul>
      </aside>


    </div>
  )
}

export default Home