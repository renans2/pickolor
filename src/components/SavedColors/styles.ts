import type { Color } from "chroma-js";
import styled from "styled-components";
import { S_MainSurface } from "../../base/MainSurface";

export const S_Container = styled(S_MainSurface)`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-area: savedColors;
`;

export const S_SaveButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.rounded.xs};
  background-color: black;
  box-shadow: ${({ theme }) => theme.shadow.detailSmall};
  padding: 7px 7px;
  color: white;
  font-weight: 600;
  transition: transform 100ms;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const S_SavedColorsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
  }
`;

export const S_SavedColor = styled.li<{
  $color: Color;
}>`
  border-radius: ${({ theme }) => theme.rounded.xs};
  background: ${({ $color }) => `linear-gradient(to right, transparent 40%, ${$color} 90%, ${$color})`};
  display: flex;
  gap: 5px;
  align-items: center;
  min-height: 30px;
  list-style: none;
`;