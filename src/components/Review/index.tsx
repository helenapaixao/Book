import { Header } from '../Header'
import * as S from './styles'

export function Review() {
  return (
    <S.Container>
      <Header title="Reviews of The Days" link="All Video" />
      <S.ImgWrapper>
        <img src="/img/review-img.png" alt="Review" />
      </S.ImgWrapper>
    </S.Container>
  )
}
