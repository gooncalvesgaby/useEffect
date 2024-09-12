import * as S from "./mensagemStyle.jsx"
import { useEffect, useState } from "react"

function Mensagem() {
    const [numero, setNumero] = useState(0)
    const [nome, setNome] = useState('gaby')

    useEffect(() => {
        console.log('chamou o effect')
    }, [])

    return(
        <S.Div>
            <S.Container>
                <S.H1>Estudando useEffect</S.H1>
                <S.Button onClick={() => {
                    setNumero(item => item + 1)
                }}>aumentar</S.Button>
                <S.P>numero {numero}</S.P>
                <S.P>Olá {nome}</S.P>
                <S.Button onClick={() => {
                    setNome('otavio')
                }}>Clique para alterar o nome</S.Button>
            </S.Container>
        </S.Div>
    )
}

export default Mensagem