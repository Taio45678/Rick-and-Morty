import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  RESET,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  NEXT_PAGE,
  PREV_PAGE,
  HANDLE_NUMBER,
  ADD_LOCATION
} from "../actions/Types/types";
const initialState = {
  location:[],
  numPage: 1,
  characters: [],
  data: [],
  myFavorites: [],
  myFavoritesOrigin: [], 
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_LOCATION:
      return {
        ...state,
        location: [...state.location, payload],
      };
    case HANDLE_NUMBER:
      return {
        ...state,
        numPage: payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };

    case ADD_CHARACTER:
      if (Array.isArray(payload)) {
        return {
          ...state,
          characters: [...state.characters, ...payload],
        };
      }
      return {
        ...state,
        characters: [payload, ...state.characters],
      };
    case REMOVE_CHARACTER:
      const newCharacter = state.myFavoritesOrigin.filter(
        (ch) => ch.id !== payload
      );
      return {
        ...state,
        myFavorites: newFavorites,
        myFavoritesOrigin: newFavorites,
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin, payload],
        myFavoritesOrigin: [...state.myFavoritesOrigin, payload],
      };
    case REMOVE_FAV:
      const newFavorites = state.myFavoritesOrigin.filter(
        (ch) => ch.id !== payload
      );
      return {
        ...state,
        myFavorites: newFavorites,
        myFavoritesOrigin: newFavorites,
      };
    case FILTER:
      const newFilter = state.myFavoritesOrigin.filter(
        (ch) => ch.gender === payload
      );
      return {
        ...state,
        myFavorites: newFilter,
      };
    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };
    case ORDER:
      const newOrder = state.myFavoritesOrigin.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrder,
      };

    default:
      return state;
  }
}
