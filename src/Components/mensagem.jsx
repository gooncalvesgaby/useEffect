import * as S from "./mensagemStyle.jsx"

function Mensagem() {
    return(
        <S.Div>
            <S.Container>
                <S.H1>GIRLS CODING</S.H1>
                <S.P>time das girls coding {} girls</S.P>
                <S.Button>aumente o numero do time</S.Button>
            </S.Container>
        </S.Div>
    )
}

export default Mensagem