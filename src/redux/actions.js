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

// export async function getCharacterByName(name) {
//   return async function (dispatch) {

//     await axios.get(`${api}people/?search=${name}`).then(res => {
//       dispatch({ type: 'GET_CHARACTER_NAME', payload: res.data })
//       // console.log(res.data)
//     }).catch(err => {
//       console.log("No se pudo traer el nombre", err)
//     })
//   }
// }

export function getCharacterByName(name) {
  return dispatch => {
    axios
      .get(`${api}people/?search=${name}`)
      .then(res => dispatch({ type: 'GET_CHARACTER_NAME', payload: res.data }));
  };
}