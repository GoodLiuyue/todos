import * as type from "./active-type.js";
// import loading from "./api.js";
export function subTodo(data) {
    return {
        type: type.SUB_TODO,
        payload: data
    }
}

export function addTodo(data) {
    return {
        type: type.ADD_TODO,
        payload: data
    }
}

export function batchTodo() {
    return {
        type: type.BATCH_TODO
    }
}

export function allSelectTodo() {
    return {
        type: type.ALL_SELECT_TODO
    }
}

export function selectTodo(id) {
    return {
        type: type.SELECT_TODO,
        payload: id
    }
}