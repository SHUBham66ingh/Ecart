// store.js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./components/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})