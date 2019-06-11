import {createStore, applyMiddleware, combineReducers} from "redux"
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {HashRouter} from "react-router-dom"
import reduxthunk from "redux-thunk"
import reducers from "@/reducers"



window.store = createStore(
              reducers,
              applyMiddleware(reduxthunk)
            )


export default window.store
