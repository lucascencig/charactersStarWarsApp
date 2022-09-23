import axios from 'axios';


const api = 'https://swapi.dev/api/';

export function getCharacters(payload) {
  return async function (dispatch) {

    await axios.get(`${api}people`).then(res => {
      dispatch({ type: 'GET_CHARACTERS', payload: res.data })
      // console.log(res.data)
    }).catch(err => {
      console.log("No se pudo traer los datos de la api", err)
    })
  }
}

export async function getCharacterByName(name) {
  const res = await fetch(`${api}people/?search=${name}`);
  const data = await res.json();
  return data;
}