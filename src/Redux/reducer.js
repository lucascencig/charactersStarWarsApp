const initialState = {
  Characters: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        Characters: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
