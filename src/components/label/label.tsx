import * as S from "./label.style";
import * as T from "./label.type";

const Label = ({ children, htmlFor }: T.labelType) => {
  return <S.Label htmlFor={htmlFor}>{children}</S.Label>;
};

export { Label };
