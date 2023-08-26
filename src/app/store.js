import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

// const logger = createLogger();

const store = configureStore({
  //here configureStore handles work of combineReducer internally
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//example logs due to middleware after running index.js:

// prev state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 10 } }
// action     { type: 'cake/ordered', payload: undefined }
// next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 10 } }
// action cake/restocked @ 12:38:31.374
// prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 10 } }
// action     { type: 'cake/restocked', payload: 5 }
// next state { cake: { numOfCakes: 12 }, icecream: { numOfIcecream: 10 } }
// action icecream/ordered @ 12:38:31.374
// prev state { cake: { numOfCakes: 12 }, icecream: { numOfIcecream: 10 } }
// action     { type: 'icecream/ordered', payload: undefined }
// next state { cake: { numOfCakes: 12 }, icecream: { numOfIcecream: 9 } }
// action icecream/ordered @ 12:38:31.375

// as we can see it takes actions types automatically from the reducer names we defined i.e. type: 'cake/ordered',type: 'cake/restocked',type: 'icecream/ordered'

export default store;
