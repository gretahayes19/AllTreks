import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { receivePark, fetchPark, fetchParkHikes} from './actions/park_actions'
import * as ParkAPIUtil from './util/park_api_util'
import { fetchSearchResults } from './actions/search_actions'
import {fetchHike} from './actions/hike_actions'

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
    window.fetchParkHikes = fetchParkHikes;
    window.receivePark = receivePark;
    window.fetchSearchResults = fetchSearchResults;
    window.fetchHike = fetchHike;

    window.fetchParkAPI = ParkAPIUtil.fetchPark
    ReactDOM.render(<Root store={store}/>, root)
})

