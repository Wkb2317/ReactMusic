import React,{memo} from 'react'

import {SongsCoverWrapper} from "./style"
import {getCount,getImgSize} from '@/utils/data-format'

export default memo(function WYSongsCover(props){
    const {picUrl,name,playCount} = props.info;

    return(
    <SongsCoverWrapper>
        <div className="top">
          <img className="img" src={getImgSize(picUrl)} alt=""/>
          <div className="cover">
            <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"/>
              {getCount(playCount)}
            </span>
              <i className="sprite_icon play"/>
            </div>
          </div>
        </div>
        <div className="bottom">
            <div className='title text-nowrap'>{name}</div>
        </div>
    </SongsCoverWrapper>)
})
