import {call, fork, takeLatest,put} from 'redux-saga/effects';
import postActions, {postSuccess, postError} from '../actions/post';
const {POST_LOADING} = postActions;
import {GET} from '../../helpers/apiCalls'
import URLS from'../../constants/apiURLS'
function* fetchPostSaga() {
  try {
    const FETCH_POST_URL = URLS.BASE_URL + URLS.POST;
    const apiResponse = yield call(GET, FETCH_POST_URL);
    yield put(postSuccess(apiResponse));
  } catch (e) {
    yield put(postError(e));
  }
}

function* watcherSaga() {
  yield takeLatest(POST_LOADING, fetchPostSaga);
}

const postSaga = [fork(watcherSaga)];
export default postSaga;
