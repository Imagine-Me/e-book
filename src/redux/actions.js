import { DELETE_BOOK, SAVE_BOOK, UPDATE_BOOK } from "./actionTypes";


export const saveBook = book => ({
    type: SAVE_BOOK,
    payload: book
})

export const updateBook = book => ({
    type: UPDATE_BOOK,
    payload: book
})

export const deleteBook = id => ({
    type: DELETE_BOOK,
    payload: id
})