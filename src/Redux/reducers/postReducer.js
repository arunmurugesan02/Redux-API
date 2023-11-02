import postActions,{postLoading,postSuccess,postError} from '../actions/post'
const {POST_LOADING,POST_SUCCESS,POST_ERROR} = postActions

const initState = {
    loading:false,
    sample:null
}

const postReducer = (state=initState, action) =>{
  switch(action.type){
    case POST_LOADING:{
        return{
            ...state,
            loading:true
        }
    }
    case POST_SUCCESS:{
        return{
           ...state,
           sample:action.response,
           loading:false
        }
    }
    case POST_ERROR:{
        return{
            ...state,
            loading:false
        }
    }
    default:{
        return{
            ...state,
        }
    }
  }
}

export default postReducer