import { getTopBanner,getHotRecommend ,getNewAlbums , getTopRanking} from '@/services/recommend'
import { HOT_RECOMMEND_LIMIT } from '@/common/constans';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_NEW_RANKING
} from './constans'

const changeTopBannersAction = (banners) =>{
 return {
   type:CHANGE_BANNERS,
   banners: banners
 } 
}

const changeHotRecommendsAction = (hotRecommends) =>{
  return {
    type:CHANGE_HOT_RECOMMENDS,
    hotRecommends
  }
}

const changeNewAlbumsAction = (newAlbums) =>{
  return {
    type: CHANGE_NEW_ALBUMS,
    newAlbums
  }
}

const changeUpRanking = (res) => {
  return {
    type:CHANGE_UP_RANKING,
    upRanking:res.playlist
  }
}

const changeNewRanking = (res) =>{
  return {
    type:CHANGE_NEW_RANKING,
    newRanking:res.playlist
  }
}

const changeOriginRanking = (res) =>{
  return {
    type:CHANGE_ORIGIN_RANKING,
    originRanking:res.playlist
  }
}



/**
 *  异步请求函数
 * */
export function getTopBannersAction(){
  return (dispatch) => {
    getTopBanner().then(res=>{
      dispatch(changeTopBannersAction(res.banners))
    })
  }
}

export function getHotRecommendsAction(){
  return dispatch => {
    getHotRecommend(HOT_RECOMMEND_LIMIT).then(res=>{
     dispatch(changeHotRecommendsAction(res.result))
    })
  }
}

export function getNewAlbumsAction(limit){
  return dispatch =>{
    getNewAlbums(limit).then(res=>{
      dispatch(changeNewAlbumsAction(res.albums));
    })
  }
}

// 榜单
export function getTopRankingAction(idx){
  return dispatch => {
    switch (idx){
      case 0:
        getTopRanking(0).then(res => {
          dispatch(changeNewRanking(res));
        });
        break;
      case 2:
        getTopRanking(2).then(res => {
          dispatch(changeOriginRanking(res));
        });
        break;
      case 3:
        getTopRanking(3).then(res => {
          dispatch(changeUpRanking(res));
        });
        break;
      default:
    }
  }
}
