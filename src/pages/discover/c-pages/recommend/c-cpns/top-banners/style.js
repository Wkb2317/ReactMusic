import styled from "styled-components";
import downloadImg  from "@/assets/img/download.png";
import banner from "@/assets/img/banner_sprite.png";
export const BannerWrapper = styled.div`
  height: 270px;
  width: 100%;
  /* background-color: #423f3a; */
  background: url(${props=>props.bgImage}) center center/6000px;

  .banner {
    display: flex;
    height: 270px;
    position: relative;
  }
`
export const BannerLeft = styled.div`
  width: 730px;
  height: 284px;

  .img{
   /* width: 100%; */
   width:730px;
  }
`

export const BannerRight = styled.div`
position: relative;
  width: 254px;
  height: 270px;
  background: url(${downloadImg});
  
  a{
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url(${downloadImg}) no-repeat 255px 0;
  }
  
  p{
    display: block;
    width: 100%;
    position: absolute;
    padding:5px 0;
    bottom: 0;
    text-align: center;
    color:#8d8d8d;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
