import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabilita il controllo di serializzazione
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // Abilita il devTools solo in ambiente di sviluppo
});

// Avvia il rootSaga per eseguire tutte le sagas
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export default rootStore;
