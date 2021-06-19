


export function GET_BOOK(bookId: string) {
  return {
    url: 'https://www.googleapis.com/books/v1/volumes' + '/' + bookId,
    options: {
      method: 'GET'
    }
  }
}

export function SEARCH_BOOKS(query: string, startItem: number) {
  return {
    url:
    'https://www.googleapis.com/books/v1/volumes' + '?q=' + query + '&startIndex=' + startItem + '&maxResults=12',
    options: {
      method: 'GET'
    }
  }
}
