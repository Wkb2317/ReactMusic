import styled from "styled-components";

export const HotRadioWapper = styled.div`
  width: 100%;
  padding: 20px;

  .header{
    height: 30px;
    width: 100%;
    /* padding: 20px; */
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    /* text-align: center; */
  }

  .list-item{
    margin-top: 14px;
    width: 100%;
    height: 40px;
    display: flex;

    .img{
      width: 40px;
      height: 40px;
    }

    .info{
      padding: 5px;
      width: 100%;
      h4{
        font-weight: 700;
      }
    }
  }
` 