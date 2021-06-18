import { useState } from 'react'
import { Header } from '../Header'
import { Banner } from '../Banner'
import * as S from './styles'
import Carousel from 'react-elastic-carousel'

export function Category() {
  const [selectedCurrentItem, setSelectedCurrentItem] = useState(0)
  const bookList = [
    { id: 0, query: 'R42aBAAAQBAJ' },
    { id: 1, query: '94ScMQEACAAJ' },
    { id: 2, query: '46zbI0Wa2pkC' },
    { id: 3, query: 'HJa_oQEACAAJ' }
  ]

  const breakPoints = [
    { width: 1, itemsToShow: 1.15 },
    { width: 375, itemsToShow: 1.3 }
  ]

  return (
    <S.Container>
      <Header title="Discover new book" link="More" />
      <S.Wrapper>
        <Carousel
          pagination={false}
          showArrows={false}
          itemsToShow={1.3}
          breakPoints={breakPoints}
          isRTL={false}
          showEmptySlots={false}
          onChange={(_, pageIndex) => {
            setSelectedCurrentItem(pageIndex)
          }}
        >
          {bookList.map((bookBanner) => (
            <Banner
              key={bookBanner.id}
              id={bookBanner.query}
              selected={bookBanner.id === selectedCurrentItem ? true : false}
              even={bookBanner.id % 2 !== 0 ? true : false}
            />
          ))}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  )
}
