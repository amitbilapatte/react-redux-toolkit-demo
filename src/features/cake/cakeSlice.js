import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  //createSlice here automatically generates actions by the name we define in the reducer i.e. here actions gerenerated will be "ordered" and "restocked"
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer; // export reducer as default export
export const { ordered, restocked } = cakeSlice.actions; //export actions as named exports
// This Last line is exporting the generated action creators from your slice.
// Redux Toolkit's createSlice automatically generates action creators
// based on the names you provide in the reducers object.
//  By exporting cakeActions, you're allowing other parts
// of your application to directly use these action creators to dispatch actions without having to manually define action types.
