import * as S from './styles'
import { Header } from '../Header'

type SaudationProps = {
  name: string
}

export function Saudation({ name }: SaudationProps) {
  return (
    <S.Container>
      <h1>
        Hi, <b>{name}</b> 👋
      </h1>
      <Header title="Discover new book" link="More" />
    </S.Container>
  )
}
