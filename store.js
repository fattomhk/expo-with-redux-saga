import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './redux/rootSaga'
import settingsSlice from './redux/slices/settingsSlice'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
export default configureStore({
    reducer: {
        settings: settingsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

})

sagaMiddleware.run(rootSaga)
