import styled from 'styled-components';

export const SettledSingerWrapper = styled.div`
  .box{
    height: 488px;
    width: 100%;
    padding: 20px;

    .header{
      width: 100%;
      height: 25px;
      line-height: 25px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
    }

    .list{
      .list-item{
        display: flex;
        margin-top: 14px;

        .img{
          width: 62px;
          height: 62px;
        }

        .info{
          /* display: flex;
          flex-direction: column;
          align-items: center; */
          /* margin-left: 10px; */
          width: 100%;
          background-color: #fafafa;
          padding: 10px;

          h3{
            font-weight: 700;
          }

          :hover{
            background-color: #eee;
          }
          
        }
      }
    }

    .footer{
      margin-top: 14px;
      width: 100%;
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      -webkit-text-decoration: none;
      text-decoration: none;
    }
  }

`;
