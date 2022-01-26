import { createSlice } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    language: 'zh-hk',
    enableNotification: true,
    notifications: {
      pushNotifications: true,
      inboxMessage: false,
      priceChangeForCollections: false,
      propertyValuationUpdate: false,
      propertyTourRequest: false,
      reminderRealty: false
    },
    sortings: null,
    scoringData: {}
  },
  reducers: {
    updateState(state, { payload }) {
      console.log(state)
      return { ...state, ...payload }
    }
  }

})

// Action creators are generated for each case reducer function
export const { updateState } = settingsSlice.actions

const sagas = {
    *changeLanguage({ payload }) {
      try {
        const originalLanguage = yield select(state=>state.settings.language)
        yield put(updateState({language: payload?.language}))
        const lang = yield select(state=>state.settings.language)
        console.log('changelanguage##', payload, originalLanguage, lang)

      } catch (error) {
        console.log(error)
      }
    },
}

export function* settingsSaga() {
  yield takeEvery("changeLanguage", sagas.changeLanguage);
}

export default settingsSlice.reducer