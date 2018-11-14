import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ActionTypes, State } from "./types";

// Type-safe initialState!
const INITIAL_STATE: State = Immutable({
  language: undefined
});

// get countries currencies
const setLanguage = (state, action) =>
  state.merge({
    language: action.payload.language
  });

// map our types to our handlers
const ACTION_HANDLERS = {
  [ActionTypes.SET_LANUAGE]: setLanguage
};

export const Reducer = createReducer(INITIAL_STATE, ACTION_HANDLERS);
