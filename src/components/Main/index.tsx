import { HeaderSaudation } from "../HeaderSaudation";
import { Menu } from "../Menu";
import { Category } from "../Category";
import { CurrentlyCategory } from "../CurrentlyCategory";
import { Review } from "../Review";

import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <HeaderSaudation name={"Helena Paixão"} />
      <Menu />
      <Category />
      <CurrentlyCategory />
      <Review />
    </S.Container>
  );
}


