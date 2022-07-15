import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData (urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credencials: 'same-origin', //no hay necesidad de poner el same, si se deja solo las comillas el codigo entendera q se refiere a ese llamado
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "210",
    "price": 25451,
    "description": "A description for me",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));