import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { receivePark, fetchPark} from './actions/park_actions'
import * as ParkAPIUtil from './util/park_api_util'

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchPark = fetchPark;

    window.receivePark = receivePark;

    window.fetchParkAPI = ParkAPIUtil.fetchPark
    ReactDOM.render(<Root store={store}/>, root)
})

