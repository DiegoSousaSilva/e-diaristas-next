import React from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from "./UserInformation.styles";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}
//https://github.com/DiegoSousaSilva.png

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}></AvatarStyled>
      <UserName> {name} </UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription> {description} </UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
