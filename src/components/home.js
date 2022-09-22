import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/Home.css'
const Home = () => {
  return (
    <div className="container-fluid bg-">

      <h1 className="bg-primary text-center text-white titulo">Star Wars Character App</h1>
      <p className='text-center bg-success text-white'>Find your favourite character from <span className='bg-danger'>Star Wars</span> and know all their details.</p>

      {/* ACA HAY QUE HACER EL MAPEO DE LOS PERSONAJES */}
      <div>
        <ul>
          <li className='table-primary'>Nombre: { }</li>
        </ul>
      </div>


      <aside className='container Primary'>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Birth Year</th>
              <th>Gender</th>
              <th>Films</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* ACA VA EL CODIGO JS PARA LOS DETALLES DEL PERSONAJE con las {} */}
              <td scope="row">LUKE</td>
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