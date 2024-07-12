import { createAction } from '@reduxjs/toolkit';
import { HackerType } from '../../../shared/constants/groupHackers.model';
import { ExtendedMitreAttackInfo } from '../models/Hub.model';

export const getMitreData = createAction<{ filter: HackerType }>('[Get Mitre Data] Get Mitre Data');
export const getMitreDataSuccess = createAction<{ mitreAttackData: ExtendedMitreAttackInfo[], filter: HackerType }>('[Get Mitre Data Success] Get Mitre Data success');
