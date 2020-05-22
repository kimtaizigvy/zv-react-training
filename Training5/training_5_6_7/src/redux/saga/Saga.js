import { fork, all } from 'redux-saga/effects';
import {
    getTodoListWatcher,
    addTodoWatcher,
    deleteTodoWatcher,
    toggleTodoWatcher
} from './TodoSaga'


export function* rootSaga() {
    yield all([
        fork(getTodoListWatcher),
        fork(addTodoWatcher),
        fork(deleteTodoWatcher),
        fork(toggleTodoWatcher)
    ])
}