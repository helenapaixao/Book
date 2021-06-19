import * as S from './styles'

type HeaderProps = {
  title: string
  link: string
}

export function HeaderCategory({ title, link }: HeaderProps) {
  return (
    <S.CategoryTitle>
      <h1>{title}</h1>
      <a href="#">{link}</a>
    </S.CategoryTitle>
  )
}
