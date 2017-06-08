/**
 * Created by andriy.moskaliuk on 07.06.2017.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/todoReducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/todoReducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}