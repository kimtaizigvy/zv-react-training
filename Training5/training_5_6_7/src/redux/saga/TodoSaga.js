import {
    takeEvery,
    put
} from 'redux-saga/effects';
import axios from 'axios'

import { SAGA_NAMES } from './SagaNames';
import { ACTION_NAMES } from '../action/ActionName'
import { BASE_URL } from '../../utils/Config'


function* getTodoList() {
    try {
        const todoList = yield axios.get(BASE_URL).then(result => result.data)
        yield put({
            type: SAGA_NAMES.SAGA_GET_LIST_TODO_SUCCESS,
            data: { todoList: todoList }
        })
    } catch (err) {
        yield put({
            type: SAGA_NAMES.SAGA_GET_LIST_TODO_FAILED
        })
        console.log('GET TODO FAILED=======>', err)
    }
}

export function* getTodoListWatcher() {
    yield takeEvery(ACTION_NAMES.GET_TODO_LIST, getTodoList)
}

function* addTodo(action) {
    try {
        const todo = yield axios.post(
            BASE_URL,
            {
                "name": action.data.todoContent,
                "completed": false
            }
        ).then(result => result.data)
        yield put({
            type: SAGA_NAMES.SAGA_ADD_TODO_SUCCESS,
            data: { todo: todo }
        })

    } catch (err) {
        yield put({
            type: SAGA_NAMES.SAGA_ADD_TODO_FAILED
        })
        console.log('ADD TODO FAILED======>', err)
    }
}

export function* addTodoWatcher() {
    yield takeEvery(ACTION_NAMES.ADD_TODO, addTodo)
}

function* deleteTodo(action) {
    try {
        yield axios.delete(
            BASE_URL + action.data.todoId,
        ).then(result => result.data)
        yield put({
            type: SAGA_NAMES.SAGA_REMOVE_TODO_SUCCESS,
            data: { todoId: action.data.todoId }
        })
    } catch (err) {
        yield put({
            type: SAGA_NAMES.SAGA_REMOVE_TODO_FAILED
        })
        console.log('REMOVE FAILED=====>', err)
    }
}

export function* deleteTodoWatcher() {
    yield takeEvery(ACTION_NAMES.DELETE_TODO, deleteTodo)
}

function* toggleTodo(action) {
    try {
        const editedTodo = yield axios.put(
            BASE_URL + action.data.todoId,
            {
                completed: action.data.toggleStatus
            }
        ).then(result => result.data)
        yield put({
            type: SAGA_NAMES.SAGA_TOGGLE_TODO_SUCCESS,
            data: { todoId: editedTodo.id, completed: editedTodo.completed }
        })
    } catch (err) {
        yield put({
            type: SAGA_NAMES.SAGA_TOGGLE_TODO_FAILED
        })
        console.log('TOGGLE FAILED=====>', err)
    }
}

export function* toggleTodoWatcher() {
    yield takeEvery(ACTION_NAMES.TOGGLE_TODO, toggleTodo)
}