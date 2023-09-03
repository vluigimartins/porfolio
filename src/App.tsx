import { ThemeProvider } from 'styled-components'

import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./styles"
import temaLight from './components/themes/light'
import temaDark from './components/themes/dark'
import { useState } from 'react'

function App() {
  const[estaUsandoTemaDark, setEstusandoTemaDark] = useState(false)

  function trocaTema() {
    setEstusandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal/>
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <Sobre/>
          <Projetos/>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
