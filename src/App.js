/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para otros componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente CelularDetail debe renderizarse en la ruta "/celulares/:id".
🟢 El componente CreateCelular debe renderizarse en la ruta "/celulares/create".
*/

import React from "react";
//import {Routes,Route,Link,useParams} from 'react-router-dom';
import {Routes, Route} from  'react-router-dom';
import Home from "./components/Home/Home";
import CelularCard from "./components/CelularCard/CelularCard";
import CreateCelular from "./components/CreateCelular/CreateCelular";
import CelularDetail from "./components/CelularDetail/CelularDetail";
import Nav from "./components/Nav/Nav";


const App = () => {
  return (

    <div>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/celulares/:id" element={<CelularDetail/>}></Route>
          <Route path="/celulares/create" element={<CreateCelular/>}></Route>
    
        
      </Routes>
    


    
    
    </div>

  );
}
export default App;
