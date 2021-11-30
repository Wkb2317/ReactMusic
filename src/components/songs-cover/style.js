import styled from "styled-components"

export  const SongsCoverWrapper = styled.div`
  width: 140px;
  height: 234px;
  margin-right: 32px;
  position: relative;
  
  .top{
    width: 140px;
    height: 140px;
    
    .img {
      width: 100%;
    }
    
    .cover{
      position: absolute;
      top: 113px;
      height: 27px;
      width: 140px;
      color: #ccc;
      background-position: 0 -537px;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }
  
  .bottom{
    margin:8px 0 3px ;
    font-size: 14px;
  }
  
  
`