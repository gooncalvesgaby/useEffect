import { createGlobalStyle } from "styled-components"
import Mensagem from "./Components/mensagem.jsx"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`

function App() {
  
  return (
   <>
   <GlobalStyle/>
   <Mensagem/>
   </>
  )
}

export default App
