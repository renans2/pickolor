import styled from "styled-components";

export const S_MainSurface = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.sm};
`;