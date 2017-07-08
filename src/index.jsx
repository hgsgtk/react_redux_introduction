import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from "react-tap-event-plugin";

import configureStore from '../store/configureStore'
import routes from './routes'

injectTapEventPlugin()

let state = window.__initialState__
const store = configureStore(browserHistory, state)

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root")
)
