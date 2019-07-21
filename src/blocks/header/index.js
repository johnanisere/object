import styled from "styled-components";

import Button from "./Button";
import Content from "./Content";

const Header = styled.header`
    display: flex;
    background-color: #2b2d42;
    border-bottom: 2px solid #202130;
    height: 100%;
    max-height: 90px;
    box-sizing: border-box;
`;

Header.Button = Button;
Header.Content = Content;

export default Header;
