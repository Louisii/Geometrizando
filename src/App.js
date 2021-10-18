import React from 'react'
import Figure from './components/Figure'
import Art from './components/Art'


/*
  Componentes
  Props
  <> Childrens </>
*/

class App extends React.Component{

  render () {

    return(

      <div>

        <h1 className='tittle'>Geometrizando</h1>

          
          <Art>
            
            <Figure
            type = 'square'
            color = 'red'
            />

            <Figure
            type = 'rectangle'
            />

          </Art>

          <Art>
            
            <Figure
            type = 'square'
            color = 'red'
            tittle = 'meu quadrado'
            />

            <Figure
            type = 'rectangle'
            />

          </Art>

      </div>
      
    )
  }

}

export default App
