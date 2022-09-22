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


      <aside className='container Primary'>
        <table class="table">
          <thead>
            <td>Name:</td>
            <td>Height: </td>
            <td>Mass: </td>
            <td>Hair Color:</td>
            <td>Skin Color: { }</td>
            <td>Eye Color: { }</td>
            <td>Birth Year: { }</td>
            <td>Gender: { }</td>
            <td>Films: { }</td>
            <td>Species: { }</td>
          </thead>
          <tbody>
            <tr>
              {/* ACA VA EL CODIGO JS PARA LOS DETALLES DEL PERSONAJE */}
              <th scope="row">LUKE</th>
              <td>70KG </td>
              <td>75KG </td>
              <td>BLACK</td>
              <td>WHITE</td>
              <td>GREEN</td>
              <td>25/09/1992</td>
              <td>MALE</td>
              <td>ALGUNAS</td>
              <td>HUMAN</td>
            </tr>

          </tbody>

        </table>
      </aside>


    </div>
  )
}

export default Home