import styled from "styled-components";

export const S_Container = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.sm};

  width: 100%;
  height: 100px;
  grid-area: clipboard;
`;
