import {SELLER_LIST} from './../constants/puplic'

const INITIAL_STATE = {
    token:'1234',
    sellerList:[],
    recommend: [],
    isFoot:false
  }

export default function puplic(state = INITIAL_STATE, action) {
    switch(action.type) {
      case SELLER_LIST: {
        const {kingKongAreaV5} = action.payload;
        return {
          ...state,
          sellerList: kingKongAreaV5
        }
      }
      default:
        return state
    }
}