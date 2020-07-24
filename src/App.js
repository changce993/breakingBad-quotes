import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  padding-top:5rem;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #000 0% ,#070d10 40%);
  margin:2rem 0;
  padding:1rem 3rem;
  border:none;
  border-radius:3px;
  font-size:2rem;
  color:#fff;
  background-size: 300px;
  box-shadow:3px 3px 6px rgb(0,0,0,1), -3px -3px 6px rgb(255,255,255,.2);
  transition:.3s ease;

  :hover{
    cursor:pointer;
    background-size:800px;
  }

  &:focus{
    outline:none;
    //box-shadow:inset 3px 3px 6px rgb(0,0,0,1), inset -3px -3px 6px rgb(255,255,255,.2);
  }
`

function App() {
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async ()=> {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()

    guardarFrase(frase[0])
  }

  useEffect(()=>{
    consultarAPI()
  }, [])

  return (
    <Contenedor>
    <Frase 
      frase={frase}
    />
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
