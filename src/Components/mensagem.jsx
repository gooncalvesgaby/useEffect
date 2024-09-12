import * as S from "./mensagemStyle.jsx"
import { useEffect, useState } from "react"

function Mensagem() {
    const [girls, setGirls] = useState(0)

    useEffect(() => {
        console.log('renderiza 1')
    })

    useEffect(() => {
        console.log('renderiza')
    }, [])
  
    return(
        <S.Div>
            <S.Container>
                <S.H1>GIRLS CODING</S.H1>
                <S.P>time das girls coding {girls} girls</S.P>
                <S.Button onClick={() => setGirls((girls) => girls + 1)}>aumente o número do time</S.Button>
            </S.Container>
        </S.Div>
    )
}

export default Mensagem