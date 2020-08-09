import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTre = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                store = {store}
                dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTre(store.getState())


store.subscribe(rerenderEntireTre)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
