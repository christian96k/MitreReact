import { combineReducers } from '@reduxjs/toolkit';
import hubReducer from '../pages/hub/store/Hub.reducer';

// Definisci il root reducer combinando i riduttori di ogni modulo
const rootReducer = combineReducers({
  hub: hubReducer,
  // Altri riduttori se presenti
});

// Tipo dello stato radice
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
