import { spawn } from 'redux-saga/effects'
import { settingsSaga } from './slices/settingsSlice'

export default function* rootSaga() {
  yield spawn(settingsSaga)
}