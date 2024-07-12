// Hub.saga.ts

import { takeLatest, call, put } from 'redux-saga/effects';
import { HackerType } from '../../../shared/constants/groupHackers.model';
import HubService from '../service/Hub.service';
import { getMitreDataSuccess, getMitreData } from './Hub.actions';
import { ExtendedMitreAttackInfo } from '../models/Hub.model';

interface MitreDataResponse {
  data: ExtendedMitreAttackInfo[];
}

interface MitreAction {
  type: string;
  payload: {
    filter: HackerType;
  };
}

function* fetchMitreData(action: MitreAction): Generator<unknown, void, MitreDataResponse> {
  console.log('Fetching Mitre data...');
  try {
    const hubService = new HubService(); 
    const response = yield call([hubService, hubService.getMitreData], action.payload.filter);
    const filteredData = action.payload.filter === HackerType.GENERIC ?
      hubService.mapMitreData(response.data) :
      hubService.filterByActorRecursive(response.data, action.payload.filter);

    yield put(getMitreDataSuccess({
      mitreAttackData: filteredData,
      filter: action.payload.filter,
    }));
  } catch (error) {
    console.error('Errore durante il fetch dei dati Mitre:', error);
  }
}

export default function* hubSaga() {
  yield takeLatest(getMitreData.type, fetchMitreData);
}
