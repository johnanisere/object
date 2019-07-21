import styled from "styled-components";

const Content = styled.p`
  color: rgb(32, 42, 54);
  font-size: 30px;
  line-height: 40px;
  font-weight:700;
  flex:${({ flex }) => flex || 1};
  margin: 0;
  background:transparent;
  color:white;
  align-items: center;
  font-size: 1.0em;
  display:flex;
  justify-content:space-between;
  padding:0 20px;
  .name{
    padding:0 20px;
    color:rgba(255,255,255,.5)
  }
  .navigation{
    display:flex;
    align-items:center;
    span{
      font-size: .8em;
    }
  }
  .space{
    margin-left:40px
  }
  button{
    font-size: .89em;
    padding:0;
    background:none;
    box-shadow:none;
    border:none;
    color:white;
    font-weight:700;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    svg{
      margin-top: 2px;
    }
  }
`;

export default Content;
