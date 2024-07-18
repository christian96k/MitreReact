import { useDispatch, useSelector } from 'react-redux';
import { HackerType } from '../../../shared/constants/groupHackers.model';
import { getMitreData } from './Hub.actions';
import { RootState } from '../../../store/rootReducer';

export function useHubFacade() {
  const dispatch = useDispatch();

  const mitreData$ = useSelector((state: RootState) => state.hub.data);
  const loading$ = useSelector((state: RootState) => state.hub.loading);


  const startGetMitreData = (filter: HackerType) => {
    dispatch(getMitreData({ filter }));
  };

  return {
    mitreData$,
    loading$,
    startGetMitreData,
  };
}
