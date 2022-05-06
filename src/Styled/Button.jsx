import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: black;
  border: none;
  font-weight: 500;
  color: white;
  height: 35px;
  margin: 5px;
  width: ${(props) =>
    props.size === "small"
      ? "108px"
      : props.size === "medium"
      ? "150px"
      : props.size === "big"
      ? "196px"
      : "auto"};
  cursor: pointer;
`;
