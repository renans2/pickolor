import styled from "styled-components";

export default function Clipboard() {
  return (
    <S_Container>
    </S_Container>
  );
}

const S_Container = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: ${({ theme }) => theme.rounded.sm};

  width: 100%;
  height: 100px;
  grid-area: clipboard;
`;