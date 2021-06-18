import { BookProps } from '../../types/index'
import * as S from './styles'

export function Books({ volumeInfo, onClick }: BookProps) {
  return (
    <S.Container onClick={onClick}>
      <img
        src={
          volumeInfo.imageLinks
            ? volumeInfo.imageLinks.thumbnail
            : '/img/cover-404.png'
        }
        alt={volumeInfo.title}
      />
      <h1>
        {volumeInfo.title.length > 15
          ? `${volumeInfo.title.substring(0, 15)}...`
          : volumeInfo.title}
      </h1>
      <h2>by {volumeInfo.authors && volumeInfo.authors[0]}</h2>
    </S.Container>
  )
}
