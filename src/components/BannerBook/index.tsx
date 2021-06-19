
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import useService from "../../hooks/useService";
import { GET_BOOK } from "../../services/api";
import * as S from "./styles";

type BannerBookProps = {
  id: string;
  selected: boolean;
  even: boolean;
};

 type BookProps = {
  id?: string;
  etag?: string;
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    authors: String[];
    description: string;
  };
  onClick: () => void;
};


export function BannerBook({ id, selected, even }: BannerBookProps) {
  const [book, setBook] = useState<BookProps>({} as BookProps);
  const router = useRouter();
  const { request } = useService();

  useEffect(() => {
    async function getBook() {
      if (id && id.length > 0) {
        const { url, options } = GET_BOOK(id);
        try {
          const { json } = await request(url, options);
          setBook(json);
        } catch (e) {
          console.log(e);
        }
      }
    }
    getBook();
  }, []);

  if (book) {
    return (
      <S.Container selected={selected} even={even}>
        <S.TextWrapper>
          <div>
            {book.volumeInfo?.title.length > 7 ? (
              <h1 style={{ fontSize: "20px" }}>
                {book.volumeInfo.title.substring(0, 7)}...
              </h1>
            ) : (
              <h1>{book.volumeInfo?.title}</h1>
            )}
            <h2>{book.volumeInfo?.authors[0]}</h2>
          </div>
          <S.StatisticsWrapper>
            <img src="/img/counter.svg" alt="Contador" />
            <p>
              <b>120+</b> Read Now
            </p>
          </S.StatisticsWrapper>
        </S.TextWrapper>
        <S.ImgWrapper>
          <S.CircleDetail src="/img/oval-reading-1.svg" alt="Circle" />
          <S.StickDetail src="/img/stick.svg" alt="Stick" />
          <S.TriangleDetail src="/img/triangle.svg" alt="Triangle" />
          <div
            onClick={() => {
              router.push(id);
            }}
          >
            <S.BookCover
              src={
                book.volumeInfo?.imageLinks
                  ? book.volumeInfo?.imageLinks?.thumbnail
                  : "/img/cover-404.png"
              }
              alt="Book"
            />
          </div>
        </S.ImgWrapper>
      </S.Container>
    );
  } else {
    return <></>;
  }
}
