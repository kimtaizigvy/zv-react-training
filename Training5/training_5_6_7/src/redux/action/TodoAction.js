import { ACTION_NAMES } from './ActionName';

export function getTodos() {
    return{
        type: ACTION_NAMES.GET_TODO_LIST
    }
}

export function addTodo(content) {
    return {
        type: ACTION_NAMES.ADD_TODO,
        data: { todoContent: content }
    }
}

export function removeTodo(todoId) {
    return {
        type: ACTION_NAMES.DELETE_TODO,
        data: { todoId: todoId }
    }
}

export function toggleTodo(todoId, toggleStatus) {
    return {
        type: ACTION_NAMES.TOGGLE_TODO,
        data: { todoId: todoId, toggleStatus: toggleStatus }
    }
}

export function showCompleted(toggleStatus) {
    return {
        type: ACTION_NAMES.SHOW_COMPLETED,
        data: { toggleStatus: toggleStatus }
    }
}