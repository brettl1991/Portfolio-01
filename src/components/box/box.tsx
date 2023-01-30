import * as S from "./box.style";

import type * as T from "./box.type";

const Box = ({
  children,
  display,
  gap,
  vertical,
  fullHeight,
  align,
  justify,
}: T.boxType) => {
  return <S.Box>{children}</S.Box>;
};

export { Box };
