import {SELLER_LIST,SHOW_FOOTER} from './../constants/puplic'

const INITIAL_STATE = {
    token:'1234',
    sellerList:[],
    recommend: [],
    // isFoot:false
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
      // case SHOW_FOOTER:
      //   const {isFoot} = action;
      //   return {
      //     ...state,
      //     isFoot: isFoot
      //   }
      default:
        return state
    }
}