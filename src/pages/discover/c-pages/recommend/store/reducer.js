import {Map} from "immutable"
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_ORIGIN_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_SETTLED_SINGER
} from './constans'

const defaultState = Map({
  topBanners: [],
  hotRecommends:[],
  newAlbums:[],
  upRanking:{},
  newRanking:{},
  originRanking:{},
  artists:[]
})
export default function reducer(state=defaultState,action){
  switch(action.type){
    case CHANGE_BANNERS:
      return state.set("topBanners",action.banners)
    case CHANGE_HOT_RECOMMENDS: 
       return state.set("hotRecommends",action.hotRecommends);
    case CHANGE_NEW_ALBUMS:
      return state.set("newAlbums",action.newAlbums);
    case CHANGE_UP_RANKING:
      return state.set("upRanking",action.upRanking);
    case CHANGE_NEW_RANKING:
      return state.set("newRanking",action.newRanking);
    case CHANGE_ORIGIN_RANKING:
      return state.set("originRanking",action.originRanking)
    case CHANGE_SETTLED_SINGER: 
      return state.set("artists",action.artists)
    default:
      return state
  }
}
