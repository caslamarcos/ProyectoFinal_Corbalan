import {useState, useEffect } from 'react';  
import EjemploHolaMundo from './EjemploHolaMundo';

const EjemploContador = () => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  console.log ("re renderizacion del componente");
  
  const aumentar = () => {
        setContador( contador + 1 );
  }

  const cambiarToggle = () => {
    setToggle (!toggle);

  }
 
useEffect (() => {
    console.log ("1er useEffect");   
}, []);

useEffect (() => {
    console.log ("2do useEffect")
}, [contador]);

useEffect (() => {
    console.log ("3er useEffect");
});

return (
    <div>
        <div>
        <p>{contador}</p>
        <button onClick={aumentar}>+</button>
        </div>

        <div>
            <p>Valor Toggle: {toggle.toString()}</p>
            <button onClick={cambiarToggle}>Alternar valor Toggle: </button>
            { toggle && <EjemploHolaMundo/> }
        </div>


    </div>
  )

}


export default EjemploContador