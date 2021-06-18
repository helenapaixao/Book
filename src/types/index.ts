export type BookProps = {
  id?: string
  etag?: string
  volumeInfo: {
    imageLinks: {
      thumbnail: string
    }
    title: string
    authors: string[]
    description: string
  }
  onClick: () => void
}
