import { createSlice } from "@reduxjs/toolkit";
import { IRouteStore } from "../../interfaces/store.interface";

const initialState: IRouteStore = {
  actualRoute: "",
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.actualRoute = action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;
export default routeSlice.reducer;
