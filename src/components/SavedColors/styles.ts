import type { Color } from "chroma-js";
import styled from "styled-components";
import { S_MainSurface } from "../../base/MainSurface";
import { motion } from "motion/react";

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.xl};
  padding: 7px 7px;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 100ms;
  background-color: white;
  color: ${({ theme }) => theme.colors.textAccent};

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    transform: scale(1);
    filter: brightness(.9);

    > :last-child {
      display: none;
    }
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

export const S_SavedColorItem = styled(motion.li)`
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
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
`;

export const S_OptionsButton = styled.button`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 1000px;
  border: 1px solid #0000001f;

  &:hover {
    filter: brightness(.8);
  }

  &:disabled {
    filter: brightness(.9);
  }
`;

export const S_SmallColorPreview = styled.div.attrs<{
  $color: Color;
}>(props => ({
  style: {
    backgroundColor: props.$color.css()
  }
}))`
  border: ${({ theme }) => theme.border};
  height: 100%;
  aspect-ratio: 1;
  transition: aspect-ratio 200ms;
`;
