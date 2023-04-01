import {
  ADD_LOCATION,HANDLE_NUMBER,
   ADD_FAV, REMOVE_FAV,PREV_PAGE, 
   FILTER, ORDER, RESET, ADD_CHARACTER,
    REMOVE_CHARACTER, NEXT_PAGE 
  } from "../Types/types";

export function addLocation(path) {
  return {
    type: ADD_LOCATION,
    payload:path
  };
}



export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}



export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}
export function handleNumber(num) {
  return {
    type: HANDLE_NUMBER,
    payload: num
  };
}

export function addCharacter(character) {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}


export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(order) { 
  return {
    type: ORDER,
    payload: order,
  };
}
export function reset() { 
  return {
    type: RESET,
  };
}

