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
// import SearchBar from './SearchBar';
// import SearchResults from './SearchResults';

const Home = () => {

  const dispatch = useDispatch()
  const inputSearch = useRef(null)

  const characters = useSelector(state => state.characters)
  // console.log(characters.results[0].name)

  const [character, setCharacter] = useState()

  const [textSearch, setTextSearch] = useState("")

  const [nextPag, setNextPag] = useState([])

  useEffect(() => {
    dispatch(getCharacters())
    setCharacter(characters)
  }, [])
  console.log(character)

  const onChangeTextSearch = (e) => {
    e.preventDefault();

    const text = inputSearch.current.value;
    setTextSearch(text)
  }

  const onSearchSubmit = (e) => {

    if (e.key !== "Enter") return;

    inputSearch.current.value = ""
    getCharacterByName(textSearch).then((char) => setCharacter(char.character.results)).catch(err => {
      alert("no, se rompio todooooo.")
    })
    console.log(inputSearch.current.value)
  }

  console.log(nextPag)
  return (
    <div className="container-fluid bg-">

      <h1 className="bg-primary text-center text-white titulo">Star Wars Character App</h1>
      <p className='text-center bg-success text-white'>Find your favourite character from <span className='bg-danger'>Star Wars</span> and know all their details.</p>

      <div>
        <form className='container searchForm' >
          <input ref={inputSearch} onChange={onChangeTextSearch} onKeyDown={onSearchSubmit} className='m-3 my-3 text-center searchbar' type="text" placeholder="Search your favourite character..." />
          <button className='btn btn-success m-3 buttonSearch'>Search</button>
        </form>
        <hr />
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
            <tr>
              {/* ACA VA EL CODIGO JS PARA LOS DETALLES DEL PERSONAJE con las {} */}
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
              <td>More Details</td>
              {/* <td>{
                characters !== undefined ? characters.results?.map(
                  e =>
                    <li key={e.species}>{e.species}</li>
                ) : "cargando"
              }</td> */}
            </tr>
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