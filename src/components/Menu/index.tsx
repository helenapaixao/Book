import * as S from './styles'

export function Menu() {
  return (
    <S.Container>
      <S.MenuItem>
        <img src="/img/home.svg" alt="Home" />
        <p>Home</p>
      </S.MenuItem>
      <S.MenuItem>
        <img src="/img/libraries.svg" alt="libraries" />
        <p>Libraries</p>
      </S.MenuItem>
      <S.MenuItem>
        <img src="/img/profile.svg" alt="Profile" />
        <p>Profile</p>
      </S.MenuItem>
    </S.Container>
  )
}
