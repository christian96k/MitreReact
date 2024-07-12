import { all } from 'redux-saga/effects';
import hubSaga from '../pages/hub/store/Hub.saga';

export default function* rootSaga() {
  yield all([
    hubSaga(),
    // Aggiungi altri sagas dei moduli qui se presenti
  ]);
}
