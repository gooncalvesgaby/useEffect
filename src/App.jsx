import { createGlobalStyle } from "styled-components"
import Mensagem from "./Components/mensagem.jsx"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #f4c7d68f;
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
