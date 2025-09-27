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
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.detailSmall};
  padding: 7px 7px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;

  &:active {
    box-shadow: none;
    transform: translateY(3px);
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