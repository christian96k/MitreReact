// Hub.selectors.ts

import { createSelector } from '@reduxjs/toolkit';
import { HubState } from './Hub.reducer';

export const selectHubState = (state: { hub: HubState }) => state.hub;

export const selectMitreData = createSelector(
  selectHubState,
  (hubState) => hubState.data
);
