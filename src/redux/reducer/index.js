/* 4️⃣ ***REDUCER*** 4️⃣ */

/* Importa las action-types aquí. */
import { GET_ALL_CELULARES, getAllCelulares, getCelularDetails } from "../actions";
import { GET_CELULARES_DETAIL } from "../actions";
import { createCelular } from "../actions";
import { deleteCelular } from "../actions";

const initialState = {
  celulares: [],
  celularDetail: {},
};

/*
En este ejercicio tendrás que crear los casos de un reducer para gestionar la información de tu estado global.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS:
🟢 Crea un caso default, que devuelva el estado global sin cambios.
🟢 Crea un caso en el que, dentro del estado "celulares", se guarden todos los celulares.
🟢 Crea un caso en el que, dentro del estado "celularDetail", se guarde el detalle de un celular.
🟢 Crea un caso en el que, dentro del estado "celulares", se agregue un nuevo celular.
    [PISTA]: puedes utilizar el spread operator.
🟢 Crea un caso en el que, dentro del estado "celulares", se elimine aquel celular cuyo ID es igual al recibido.
*/

const rootReducer = (state = initialState, action) => {
    console.log("entro al reducer");
    console.log("accion del reducer",action.type);
  switch (action.type) {
    case GET_ALL_CELULARES:
        console.log("entro al reducer Case Get All Celular");
      return{
          ...state,
          celulares:action.payload,
      }
  case GET_CELULARES_DETAIL:
      
      return{
          ...state,
          celularDetail:state.celularDetail
      };
  case createCelular:
      
      return{
          ...state,
          celularDetail:state.celularDetail
      };


  default:
      return state;
  }
};

export default rootReducer;
