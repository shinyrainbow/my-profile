import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import App from './src/App'
// import store from './redux/store'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'

ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>
    , document.getElementById('root'))

