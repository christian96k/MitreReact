import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { ExtendedMitreAttackInfo } from '../models/Hub.model';
import { HackerType } from '../../../shared/constants/groupHackers.model';
import { getMitreDataSuccess } from './Hub.actions';


export interface HubState {
  data: ExtendedMitreAttackInfo[] | null;
  filter: HackerType;
}

const initialState: HubState = {
  data: null,
  filter: HackerType.APT28, 
};

const hubReducer: Reducer<HubState, PayloadAction<{ mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType }>> = createReducer(initialState, (builder) => {
  builder.addCase(getMitreDataSuccess, (state, action) => {
    const { mitreAttackData, filter } = action.payload;
    state.data = mitreAttackData;
    state.filter = filter;
  });
});

export default hubReducer;
