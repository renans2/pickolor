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
  border-radius: ${({ theme }) => theme.rounded.xs};
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadow.detailSmall};
  padding: 7px 7px;
  color: ${({ theme }) => theme.colors.textAccent};
  font-weight: 600;
  font-size: 1rem;
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

export const S_SavedColorItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  min-height: 30px;
  list-style: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};

    > :last-child {
      aspect-ratio: 3;
    }
  }
`;

export const S_SavedColorOptions = styled.div`
  flex: 1;
`;

export const S_SavedColorPreview = styled.div<{
  $color: Color;
}>`
  border: ${({ theme }) => theme.border};
  background-color: ${({ $color }) => `${$color}`};
  /* border-radius: ${({ theme }) => theme.rounded.xl}; */
  height: 100%;
  aspect-ratio: 1;
  transition: aspect-ratio 200ms;
`;