import { createSlice } from "@reduxjs/toolkit";
import { ISessionStore } from "../../interfaces/store.interface";

const initialState: ISessionStore = {
  _id: "",
  name: "",
  roles: [],
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.roles = action.payload.roles;
    },
  },
});

export const {} = sessionSlice.actions;
export default sessionSlice.reducer;
