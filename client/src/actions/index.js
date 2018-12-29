import { api } from '../config';

export const addNotes = notes => {
  return {
    type: 'ADD_NOTES',
    notes,
  };
}

export function fetchNotes() {
  return function(dispatch) {
    return fetch(`${ api }/notes`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json =>
        dispatch(addNotes(json.notes)),
      );
  }
}