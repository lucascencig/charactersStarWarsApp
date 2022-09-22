import axios from 'axios';
const api = 'https://swapi.dev/api/';
export function getCharacters() {
  return function (dispatch) {
    console.log('cada1');
    axios.get(`${api}people`).then(res => {
      return dispatch({ type: 'GET_CHARACTERS', payload: res.data });
    });
  };
}
export function getAgenda() {
  return async function (dispatch) {
    axios
      .get(
        'https://my-json-server.typicode.com/juanpernu/bilog-fe-challenge/schedule'
      )
      .then(res => {
        return dispatch({ type: 'GET_AGENDA', payload: res.data });
      });
  };
}
