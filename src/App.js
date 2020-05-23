import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import Clima from './components/Clima/Clima'
import Error from './components/Error/Error'

function App() {

  const initialStateSearch = {
    city: '',
    country: '',
  }

  const [search, setSearch] = useState(initialStateSearch)
  const [callAPI, setCallAPI] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const {city, country} = search

  useEffect(() => {
    
    const searchAPI = async () =>{
      if(callAPI){
        const appId = 'd7681a556c6f9601a0c8c5190eb13413'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
  
        const APICall = await fetch(url)
        const res = await APICall.json()
  
        setResult(res)
        setCallAPI(false)
        if(res.cod === "404"){
          setError(true)
        } else {
          setError(false)
        }
      }
    }

    searchAPI()
    // eslint-disable-next-line
  }, [callAPI])


  return (
    <Fragment>
      <Header
        titulo="React Weather"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                search={search} 
                setSearch={setSearch}
                setCallAPI={setCallAPI}
              />
            </div>
            <div className="col m6 s12">
              {
                error ? <Error msn="City not Found"/> : <Clima result={result}/>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
