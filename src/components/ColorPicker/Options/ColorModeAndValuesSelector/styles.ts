import styled from "styled-components";

export const S_Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const S_Select = styled.select`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};
  color: ${({ theme }) => theme.colors.textPrimary};

  padding: 5px;
  width: 100px;
`;

export const S_ValuesSelectorContainer = styled.div`
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.rounded.sm};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 5px 10px;

  & > label {
    color: ${({ theme }) => theme.colors.textPrimary};
    width: fit-content;
  }

  & input {
    flex: 1;
    color: ${({ theme }) => theme.colors.textAccent};
    border-radius: ${({ theme }) => theme.rounded.xs};
    border: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 3px;
  }
`;