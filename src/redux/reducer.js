const initialState = {
  characters: [],
  characterName: [],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload
      }

    case 'GET_CHARACTER_NAME':
      return {
        ...state,
        characterName: action.payload
      }

    default: return state
  }
}
