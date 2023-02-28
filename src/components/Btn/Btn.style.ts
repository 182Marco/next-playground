import styled from 'styled-components'
import {BtnStyleProps} from "./propTypes";

export const BtnStyle = styled.button<BtnStyleProps>`
   color: ${p => p.col};
   background-color: ${p => p.bg};
`

export default BtnStyle