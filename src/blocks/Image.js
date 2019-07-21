import styled, { css } from "styled-components";

const Image = styled.span`
  position: relative;
  display: inline-block;
    height: 100%;
    cursor: pointer;
    ${
    ({ active }) => active && css`
        &::before{
            content:"";
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            font-size:25px;
            background-color:rgba(0,0,0,.25)

        }`
    }
`;

export default Image;
