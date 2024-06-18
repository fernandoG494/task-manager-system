import { configureStore } from "@reduxjs/toolkit";

import routeReducer from "./slices/route.slice";
import sessionReducer from "./slices/session.slice";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    route: routeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
