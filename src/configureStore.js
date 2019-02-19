import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), //root reducer with router states
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    )

    return store;
}