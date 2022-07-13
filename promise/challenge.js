import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi)
};

/* fetchData(`${API}/products`)
  .then(Response => Response.json())
  .then(products => {
      console.log(products);
  })
  .then(() => {
      console.log('hola') //puedo agregar mas .then q necesite para entregarme informacion
  })
  .catch(error => console.log(error)); //para que me genere error si lo hay */

  fetchData(`${API}/products`)
    .then(Response => Response.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(Response => Response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(Response => Response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error));
