import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk, logger],
})

export default store
