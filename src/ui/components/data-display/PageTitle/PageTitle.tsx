import React from "react";
import * as S from "./pageTitle.styles";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <S.PageTitleContainer>
      <S.PageTitleStyled>{props.title}</S.PageTitleStyled>
      <S.PageSubtitleStyled>{props.subtitle}</S.PageSubtitleStyled>
    </S.PageTitleContainer>
  );
};

export default PageTitle;
