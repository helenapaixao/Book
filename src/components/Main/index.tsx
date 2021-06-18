import { Saudation } from '../SComponent'
import { Menu } from '../Menu'
import { Banner } from '../Banner'
import { RCategory } from '../RCategory'
import { Review } from '../Review'

import * as S from './styles'

export function Main() {
  return (
    <S.Container>
      <Saudation name={'Helena Paixão'} />
      <Menu />
      <Banner />
      <RCategory />
      <Review />
    </S.Container>
  )
}
