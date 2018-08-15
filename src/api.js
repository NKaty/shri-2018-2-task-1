import { mapServerData } from './mappers';

function handleErrors (response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}

export function loadList () {
  return fetch('/api/stations')
    .then(handleErrors)
    .then(response => response.json())
    .then(mapServerData)
    .catch(error => console.log(error));
}

export function loadDetails (id) {
  return fetch(`/api/stations/${id}`)
    .then(handleErrors)
    .then(response => response.json())
    .catch(error => console.log(error));
}
