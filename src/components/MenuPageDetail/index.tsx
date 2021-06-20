import * as S from './styles'

export function MenuPageDetail() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.MenuItem>
          <img src="/img/bookopen.svg" alt="Book" />
          <p>Read</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="/img/phones.svg" alt="Phone" />
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
