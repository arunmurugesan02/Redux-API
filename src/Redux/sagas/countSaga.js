import {takeLatest, fork, put} from 'redux-saga/effects';
import countActions, {decrementError, decrementSuccess, incrementError, incrementSuccess} from '../actions/count';
const {INCREMENT_LOADING,DECREMENT_LOADING} = countActions;

function* incrementSaga() {
  try {
    yield put(incrementSuccess());
  } catch (_) {
    yield put(incrementError());
  }
}

function*decrementSaga(){
    try{
        yield put(decrementSuccess())
    }
    catch(_){
     yield put(decrementError())
    }
}

function* watcherSaga() {
  yield takeLatest(INCREMENT_LOADING, incrementSaga);
  yield takeLatest(DECREMENT_LOADING,decrementSaga)

}
const countSaga = [fork(watcherSaga)];
export default countSaga;
