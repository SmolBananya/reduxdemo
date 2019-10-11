import * as actionTypes from "../../Actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };

    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(
          result => result.id !== action.resultElementId
        )
      };
  }

  return state;
};

export default reducer;
