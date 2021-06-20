import { useRouter } from 'next/dist/client/router'
import { HeaderCategory } from '../HeaderCategory'

import * as S from './styles'

export function CurrentlyCategory() {
  const router = useRouter()

  return (
    <S.Container>
      <HeaderCategory title="Currently Reading" link="All" />
      <S.Wrapper>
        <img
          src="/img/originals-book.png"
          alt="Originals"
          onClick={() => {
            router.push('eLRhDgAAQBAJ')
          }}
        />
        <S.WrapperOval>
          <S.OvalDetail src="/img/oval-reading.png" alt="Oval Detail" />
        </S.WrapperOval>
        <S.WrapperCircle>
          <S.CircleDetail src="/img/oval-reading-1.svg" alt="Circle" />
        </S.WrapperCircle>
        <S.WrapperStick>
          <S.StickDetail src="/img/stick.svg" alt="Stick" />
        </S.WrapperStick>
        <S.InfoWrapper>
          <S.TitleWrapper>
            <h1>Originals</h1>
            <h2>by Adam Grant</h2>
          </S.TitleWrapper>
          <S.CounterWrapper>
            <img src="/img/small-book.svg" alt="Book" />
            <p>
              Chapter <b>2</b> From 9
            </p>
          </S.CounterWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
