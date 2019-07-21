import styled from "styled-components";

import Header from "./Header";

const SectionLayout = styled.div`
  width: 100%;
  background-color: #2b2d42;
  border-bottom:2px solid #202130;
  box-sizing: border-box;
  flex:1;
  display: flex;
  flex-direction: column;
  .child{
    flex:1;
    display:flex;
    overflow-y: scroll;
    background-color:#202130;
  }
`;


SectionLayout.Header = Header;
export default SectionLayout;
