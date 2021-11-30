import styled from "styled-components"

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width};
  
  .albumItem{
    position: relative;
    width:${props => props.width};
    //height: 100px;
    
    .image{
      width: ${props => props.size + "px"};
      height: ${props => props.size + "px"};
    }
    
    .cover{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .albumInfo{
    margin: 10px 0 0 4px;
  }

`