/* 3️⃣ ***ACTIONS*** 3️⃣ */
//📢 Puedes utilizar axios si lo deseas, solo debes importarlo 📢
//📢 Recuerda que debes retornar la petición que realices.
// Por ejemplo:
// return axios(...)...
// return fetch(...)...
import axios from 'axios';
export const GET_ALL_CELULARES = "GET_ALL_CELULARES";
export const GET_CELULARES_DETAIL = "GET_CELULARES_DETAIL";
export const CREATE_CELULAR = "CREATE_CELULAR";
export const DELETE_CELULAR = "DELETE_CELULAR";



//base da tos

const baseUrl='http://localhost:3001/celulares/';

const getAll=async()=>{
    const res= await axios.get(baseUrl);
    return res.data;
}
const {value}=getAll();
console.log(value);
console.log("la data es:",getAll()['value']);
// 🟢 getAllCelulares:
// Esta función debe realizar una petición al Back-End. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/celulares'.
export const getAllCelulares = (data) => {
    return{
        type:GET_ALL_CELULARES,
        payload: "prueba",
    }

};



// 🟢 getCelularesDetails:
// Esta función debe hacer una petición al Back-End. Ten en cuenta que tiene que recibir la variable "id" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/celulares/:id'.
export const getCelularDetails = (id) => {
    return {
        type:GET_CELULARES_DETAIL,
    }
};

// 🟢 createCelular:
// Esta función debe recibir una variable "celulares" por parámetro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable celulares, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual a la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites.
 let id = 6;
export const createCelular = (celulares) => {
    let id2=id++;
    return{
        type: CREATE_CELULAR,
        payload: {
            ...celulares,
            id: id2 
        }
    }
};

// 🟢 deleteCelular:
// Esta función debe retornar una action. En su propiedad "payload" guardarás el ID recibido por parámetro.
export const deleteCelular = (payload) => {
    return{
        type: DELETE_CELULAR,
    }
};
