import { HeaderCategory } from '../HeaderCategory'

import * as S from './styles'

export function Review() {
  return (
    <S.Container>
      <HeaderCategory title="Reviews of The Days" link="All Video" />
      <S.ImgWrapper>
        <img src="/img/review-img.png" alt="Review" />
      </S.ImgWrapper>
    </S.Container>
  )
}
