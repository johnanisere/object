import styled from "styled-components";


const Menu = styled.section`
  width:50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color:#202130;
  align-items: center;
  padding: 15px 0;
  box-sizing: border-box;
  span{
    cursor:pointer;
    color:#ffffff;
    margin-bottom: 30px;
  }
  .active{
    color:#3bb871;
  }
  .more{
    font-size: 10px;
    height: 22px;
    width: 22px;
    background-color: rgba(255,255,255,.1);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;



export default Menu;
