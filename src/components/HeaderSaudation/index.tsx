import * as S from './styles'

type SaudationProps = {
  name: string
}

export function HeaderSaudation({ name }: SaudationProps) {
  return (
    <S.Container>
      <h1>
        Hi, <b>{name}</b> 👋
      </h1>

    </S.Container>
  )
}
