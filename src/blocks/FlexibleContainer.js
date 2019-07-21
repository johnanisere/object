import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex:${({ flex }) => flex || 1};
  background-color:${({ background }) => background ? "#2b2d42" : "transparent"};
  height:${({ height }) => height || "auto"};
  max-height:${({ height }) => height || "auto"};
  border-right:${({ border }) => border ? "2px solid #1e1f2f" : "none"};
  flex-direction:${({ direction }) => direction || "row"};
  .list{
    font-size: 0.9em;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 15px;
      display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    svg{
      margin-right:10px;
    }
  }
  ${
  ({ editor }) => editor && css`
      flex:1;
      background-color:#11111c;
      padding:50px;
      img{
        display:block;
        height:100%;
        width:auto;
      }
      .img-holder{
        height:100%;
        width: max-content;
        box-sizing:border-box;
        cursor:${({ cursor }) => cursor || "default"}
      }
      .rectangle {
        border: 1px dashed #43cd78;
        position: absolute;
        background-color:rgba(255,255,255,.1);
        .top-header{
          position: absolute;
          width: 100%;
          top: calc(-54px);
          left:-2px;
          padding: 10px 0;
          font-weight: 600;
          color: #ffffff;
          font-size: 16px;
          .name{
            margin-bottom: 2px;
          }
          .cancel{
            cursor: pointer;
          }
          div{
            display: flex;
            justify-content: space-between;
          }
          .flag{
            background-color: #3ca45e;
            display: block;
            width: auto;
            font-size: 0.7em;
            padding: 5px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }
      }
    `}

    ${
  ({ list }) => list && css`
      flex:1;
      background-color:#202130;
      padding: 10px 25px;
      flex:1;
    `}
  ${
  ({ header }) => header && css`
      height:50px;
      max-height:50px;
      display:flex;
      border-bottom:2px solid #202130;
      box-sizing: border-box;
    `}

    ${
  ({ slider }) => slider && css`
      height:80px;
      max-height:80px;
      display:flex;
      padding:10px 0;
      box-sizing:border-box;
      img{
        height:100%;
        width:auto;
        cursor:pointer;
      }
      div{
        flex:1
        margin:0 10px;
      }
      button{
        background-color:#434456;
        color:white;
        font-size:15px;
        cursor:pointer;
        border:none;
      }

    `}

`;

export default Container;
