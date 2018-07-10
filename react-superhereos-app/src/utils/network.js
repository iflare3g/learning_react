const baseURL = "http://localhost:3001/superheroes";

function makeReq(url, errorMsg = '', options = {}) {
  return fetch(url, options)
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error(errorMsg);
    }
  });
}

export const getAll = () => {
  const errorMsg = 'Errore durante il fetching dei dati';
  return makeReq(baseURL, errorMsg);
};

export const sendSuperheroToTheServer = (superhero) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(superhero)
  };
  const errorMsg = 'Errore nel collegamento col server'

  return makeReq(baseURL, errorMsg, options)
};

export const deleteSuperheroFromTheServer = (superheroId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const errorMsg = "Impossibile cancellare elemento dal server";

  const url = `${baseURL}/${superheroId}`;

  return makeReq(url, errorMsg, options);
}
