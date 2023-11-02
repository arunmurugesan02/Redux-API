import  countActions  from '../actions/count'
const{INCREMENT_LOADING,INCREMENT_SUCCESS,INCREMENT_ERROR,DECREMENT_LOADING,DECREMENT_SUCCESS,DECREMENT_ERROR} = countActions

const initState ={
    loading: false,
    data:0
}

const countReducer = (state=initState,action)=>{
    switch(action.type){
        case INCREMENT_LOADING: {
            return{
                ...state,
                loading: true,
            }
        }
        case INCREMENT_SUCCESS:{
            return{
                ...state,
                data:state.data+1,
                loading:false,
            }
        }
        case INCREMENT_ERROR: {
            return{
                ...state,
                loading:false,
            }
        }
        case DECREMENT_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case DECREMENT_SUCCESS:{
            return{
                ...state,
                data:state.data-1,
                loading:false
            }
        }
        case DECREMENT_ERROR:{
            return{
                ...state,
                loading:false,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default countReducer