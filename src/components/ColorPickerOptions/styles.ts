import styled from "styled-components";
import { S_MainSurface } from "../../base/MainSurface";

export const S_ColorPickerOptionsContainer = styled(S_MainSurface)`
  grid-area: pickerOptions;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 17px;
`;
