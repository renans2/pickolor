import styled from "styled-components";
import { S_MainSurface } from "../../base/MainSurface";

export const S_Container = styled(S_MainSurface)`
  grid-area: clipboard;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const S_Select = styled.select`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  padding: 5px;
`;

export const S_SelectedColorModeToCopy = styled.div<{ $copied: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.9rem;
  padding: 7px;
  border-radius: 10px;
  font-weight: 500;

  cursor: ${({ $copied }) => $copied ? "default" : "pointer"};

  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
`;
