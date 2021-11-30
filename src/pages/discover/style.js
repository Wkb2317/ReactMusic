import  styled from 'styled-components'

export  const DiscoverWrapper = styled.div`
  width: 100%;

  .content{
    width: 100%;
    height: 34px;
    background-color:#C20C0C;
    border-bottom: 1px solid #a40011;
  }
`

export const TopMenu = styled.div`
  .nav{
    padding-left: 180px;
    height: 34px;
    width: 800px;
    display: flex;

    a{
      color: #fff;
      display: block;
      padding: 0 13px;
      margin: 0 17px;
      line-height: 25px;

      &:hover, &.active {
      border-radius: 20px;
      background-color: #9B0909;
    }
    }

   
  }
`