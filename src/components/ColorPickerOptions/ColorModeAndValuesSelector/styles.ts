import styled from "styled-components";

export const S_Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
  border-radius: ${({ theme }) => theme.rounded.sm};

  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;

  & > label {
    color: ${({ theme }) => theme.colors.textPrimary};
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    > input {
      padding: 5px;
      background-color: ${({ theme }) => theme.colors.bg};
      border: ${({ theme }) => theme.border};
    }
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