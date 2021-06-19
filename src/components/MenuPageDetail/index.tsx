import * as S from './styles'

export function MenuPageDetail() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MenuItem>
          <img src="/img/book-open.svg" alt="Book Open" />
          <p>Read</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="/img/headphones.svg" alt="Headphone" />
          <p>Listen</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="/img/share.svg" alt="Share button" />
          <p>Share</p>
        </S.MenuItem>
      </S.Wrapper>
    </S.Container>
  )
}
