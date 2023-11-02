import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import postReducer from "./reducers/postReducer";

 const countPersistConfig={
    key:"count",
    storage:AsyncStorage
 }

  const postPersistConfig={
    key:'post',
    storage:AsyncStorage
  }

export default combineReducers({
    count: persistReducer(countPersistConfig,countReducer),
    post:persistReducer(postPersistConfig,postReducer)
})