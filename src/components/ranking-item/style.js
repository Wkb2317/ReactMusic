import styled from "styled-components";

export const RankingItemWrapper = styled.div`
  width: 230px;
  height: 472px;

  .top{
    height: 100px;
    padding: 20px 0 0 19px;
    width: 100%;

    .img{
      height: 80px;
      width: 80px;
      float: left;
    }

    .title{
      width: 116px;
      height: 51px;
      margin: 6px 0 0 10px;
      float: left;
      
      .btn{
        margin-top: 10px;
        height: 22px;
        width: 100%;

        .btn1{
          width: 22px;
          height: 22px;
          float:left;
          background-position: -267px -205px;
        }

        .btn2{
          width: 22px;
          height: 22px;
          float:left;
          margin-left: 10px;
          background-position: -300px -205px;
        }
      }
    }
  }

  .list{
    height: 372px;
    width: 230px;
    margin-top: 20px;

    .list-item{
      display: flex;

      .rank{
        width: 35px;
        height: 32px;
        line-height: 32px;
        margin-left: 10px;
        font-size: 16px;
        text-align: center;
      }

      :nth-child(-n+3) .rank{
          color: #c10d0c;
      }

      .info{
        height: 32px;
        width: 170px;
        line-height: 32px;
        display: flex;
        justify-content:space-between;

        .name{
          flex: 1;
          /* width: 96px; */
        }

        &:hover .icon{
          display: block;
        }

        .icon{
          margin-left: 7px;
          margin-top: 7px;
          width: 90px;
          height: 32px;
          /* display: flex;
          justify-content: space-around; */
          display: none;

          .btn{
            width: 17px;
            height: 17px;
            margin-right: 8px;
            display: block;
            float: left;
            text-indent: 9999px;
          }

          .play{
            background-position: -267px -268px;
          }

          .add{
            margin-top: 2px;
            background-position: 0 -700px;
          }

          .favor{
            background-position:-297px -268px
          }
        }
      }
    }

    .footer{
      height: 32px;
      line-height: 32px;
      width: 210px;
      display: flex;
      justify-content: flex-end;
      margin-right:10px;
    }
  }

  
`