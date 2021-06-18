import * as S from './styles'

const Main = ({ title = 'Books', description = 'Iniciando projeto' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
