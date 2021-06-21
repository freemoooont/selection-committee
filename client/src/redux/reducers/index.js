import { combineReducers } from 'redux';

import program from "./program";

const rootReducer = combineReducers({
    program: program,
});

export default rootReducer;