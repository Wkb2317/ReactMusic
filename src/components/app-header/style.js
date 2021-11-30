import styled from "styled-components"
import sprite_01 from '@/assets/img/sprite_01.png';     // 在styled-components中引入图片，要先import然后用模板字符串的方式取
export const HeaderWrapper = styled.div`
  height : 75px;
  width: 100%;
  font-size: 14px;
  background-color: #242424;

  .content{
    display: flex;
    height: 70px;
  }

  .bottom{
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo{
    display: block;
    height: 70px;
    width: 157px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list{
    display: flex;
    position: relative;
    margin-left: 20px;

    .select-item{
      position: relative;
      height: 100%;
      line-height: 70px;

      a{
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      
      .active .icon{
        position: absolute;
        bottom: 0;
        transform: translateX(-50%);
        left: 50%;
        display: block;
        width: 12px;
        height: 6px;
        background-position:-226px 0;
      }

      :last-child a{
        position: relative;
        ::after{
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a {
        color: #fff;
        background: #000;
      }
    }

   
  }
    
`;
export const HeaderRight  = styled.div`
display: flex;
align-items: center;
font-size: 12px;
color: #ccc;
margin-left: 80px;

.search{
  width: 158px;
  height: 32px;
  border-radius: 16px;
  outline: none !important;
  
  input {
    &::placeholder {
      font-size: 12px;
    }
  }
}

.create{
  width: 90px;
  height: 32px;
  line-height: 32px;
  border-radius: 20px;
  border : 1px solid #4f4f4f;
  text-align: center;
  margin: 0 20px;
  :hover{
    cursor: pointer;
    border: 1px solid #fff;
    color: #ffff;
  }
}

.login{

}
`;