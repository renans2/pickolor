import styled from "styled-components";

export const S_MainSurface = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};

  @media (min-width: 768px) {
    box-shadow: ${({ theme }) => theme.shadow.surface};
  }
`;