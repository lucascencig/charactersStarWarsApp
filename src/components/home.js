//IMPORTACIONES REACT
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Pages from './Pages';

//ACTIONS:
import { getCharacters, getCharacterByName } from '../redux/actions';

//STYLES
import '../styles/bootstrap.min.css'
import '../styles/Home.css'
import '../styles/searchbar.css'
import swal from 'sweetalert'
// import SearchBar from './SearchBar';
// import SearchResults from './SearchResults';

const Home = () => {

  const dispatch = useDispatch()


  const characters = useSelector(state => state.characters)
  // console.log(characters.results[0].name)

  const [character, setCharacter] = useState()
  const [nextPag, setNextPag] = useState([])
  const [charName, setCharName] = useState("")

  useEffect(() => {
    dispatch(getCharacters())
    setCharacter(characters)
  }, [])


  const handleChange = (e) => {
    e.preventDefault()
    setCharName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (charName.length) {
        dispatch(getCharacterByName(charName));
        console.log(charName)
      } else {
        // alert("Write a character´s name")
        swal(
          {
            title: 'Write a character´s name',
            button: 'Ok.'
          }
        )
      }
    } catch (err) {
      throw new Error(err)
    }


    if (charName.length <= 2) {
      swal(
        // <h2>Escribe más de 2 caracteres...</h2>
        {
          title: 'Please, write more...',
          button: 'Ok.'
        }
      )
    }
  }

  console.log(nextPag)
  return (
    <div className="container-fluid bg-">

      <h1 className="bg-primary text-center text-white titulo">Star Wars Character App</h1>
      <p className='text-center bg-success text-white'>Find your favourite character from <span className='bg-danger'>Star Wars</span> and know all their details.</p>

      <div>
        <form className='container searchForm' >
          <input onChange={handleChange} value={charName} className='m-3 my-3 text-center searchbar' type="text" placeholder="Search your favourite character..." />
          <button onClick={handleSubmit} className='btn btn-success m-3 buttonSearch'>Search</button>
        </form>
        <hr />
      </div>

      <div>
        {charName.length ? <h2>Results for: {charName} </h2> : <h2>No results for: {charName}</h2>}

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
              {/* <th>Species</th> */}
            </tr>
          </thead>
          <tbody>
            {/* ACA VA EL CODIGO JS PARA LOS DETALLES DEL PERSONAJE con las {} */}
            {characters.results ?
              <tr>
                <td scope="row">{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li >{e.name}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }</td>
                <td> {
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.height}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }
                </td>

                <td>{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.mass}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                } </td>
                <td>{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.hair_color}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }</td>
                <td>{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.skin_color}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }</td>
                <td>{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.eye_color}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }</td>
                <td>{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.birth_year}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }</td>
                <td>{
                  characters !== undefined ? characters.results?.map(
                    e =>
                      <div key={e.url}>
                        <li>{e.gender}</li>
                      </div>
                  ).slice(0, 1) : "cargando"
                }</td>
                {characters ? <td>More Details</td> : null}

                {/* <td>{
              characters !== undefined ? characters.results?.map(
                e =>
                  <li key={e.species}>{e.species}</li>
              ) : "cargando"
            }</td> */}
              </tr>
              : <tr><td>Which character do you want to see their detail?</td></tr>}
          </tbody>

        </table>
      </aside>

      <div>
        <Pages />
      </div>


    </div>
  )
}

export default Home