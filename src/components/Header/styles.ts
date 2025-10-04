import styled from "styled-components";
import type { HEX } from "../../types/HEX";

export const S_Header = styled.header.attrs<{ 
  $color: HEX 
}>((props) => ({
  style: { backgroundImage: `linear-gradient(to right, ${props.$color}, black, ${props.$color})`}
}))`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc(50vw - (768px / 2));
  box-shadow: ${({ theme }) => theme.shadow.detailSmall};

  background-size: 200% 100%;
  background-position: left top;
  transition: background-position 300ms ease-in-out;

  &:hover {
    background-position: right top;

    > h1 {
      text-shadow: 0 0 3px white;    
    }
  }

  @media (max-width: 767px) {
    padding: 0 25px;
  }
`;

export const S_Title = styled.h1`
  font-family: "Cookie", cursive;
  font-size: 3rem;
  font-weight: 1000;
  font-style: normal;
  text-shadow: 1px 1px 2px #000000bb;
  color: white;
  transition: text-shadow 300ms ease-in-out;
`;

export const S_RepoButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  gap: 5px;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.detail};
  transition: transform 200ms;
  text-decoration: none;
  color: black;

  > img {
    width: 25px;
  }

  > span {
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px white;
    border: none;
  }
`;
