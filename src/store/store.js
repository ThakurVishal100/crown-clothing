import { compose, createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger';

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action);
  console.log("payload", action.payload);
  console.log("curr state", store.getState());

  next(action);

  console.log("next state", store.getState());
};

const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
