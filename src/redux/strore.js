import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import counter from './reducer'

const store = createStore(
    counter, composeWithDevTools(applyMiddleware())
)
export default store;