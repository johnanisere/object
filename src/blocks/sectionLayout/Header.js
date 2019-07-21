import styled from "styled-components";

const Header = styled.header`
  font-size: 0.8em;
  height:50px;
  box-sizing: border-box;
  font-weight: 600;
  line-height: 1.5;
  color:white;
  padding: 10px 25px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  border-bottom:2px solid #1e1f2f;
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
      margin-right:5px;
    }
  }
`;

export default Header;
