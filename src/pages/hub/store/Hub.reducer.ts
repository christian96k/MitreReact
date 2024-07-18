import { createReducer, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { ExtendedMitreAttackInfo } from '../models/Hub.model';
import { HackerType } from '../../../shared/constants/groupHackers.model';
import { getMitreData, getMitreDataSuccess } from './Hub.actions';


export interface HubState {
  data: ExtendedMitreAttackInfo[] | null;
  filter: HackerType;
  loading: boolean;
}

const initialState: HubState = {
  data: null,
  filter: HackerType.APT28, 
  loading: false,
};

const hubReducer: Reducer<HubState, PayloadAction<{ mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType }>> = createReducer(initialState, (builder) => {
  
  builder.addCase(getMitreData, (state, action) => {
    const { filter } = action.payload;
    state.loading = true;
    state.filter = filter;
  });
  
  builder.addCase(getMitreDataSuccess, (state, action) => {
    const { mitreAttackData, filter } = action.payload;
    state.data = mitreAttackData;
    state.filter = filter;
    state.loading = false;
  });

});

export default hubReducer;
