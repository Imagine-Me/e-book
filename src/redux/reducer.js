
import { DELETE_BOOK, SAVE_BOOK, STORAGE_ID, UPDATE_BOOK } from './actionTypes'

let initialData = []
let storageData = localStorage.getItem(STORAGE_ID)
if (storageData) {
    initialData = JSON.parse(storageData)
}

const initialState = {
    data: initialData
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_BOOK:
            const data = [...state.data]
            data.push(action.payload)
            localStorage.setItem(STORAGE_ID, JSON.stringify(data))
            return {
                ...state,
                data
            }

        case UPDATE_BOOK:
            const bookId = action.payload.id
            const prevData = [...state.data]
            const updatedBook = {
                title: action.payload.title,
                text: action.payload.text
            }
            prevData.splice(bookId, 1, updatedBook)
            localStorage.setItem(STORAGE_ID, JSON.stringify(prevData))
            return {
                ...state,
                data: prevData
            }

        case DELETE_BOOK:
            const id = action.payload.id
            const tempData = [...state.data]
            tempData.splice(id, 1)
            localStorage.setItem(STORAGE_ID, JSON.stringify(tempData))
            return {
                ...state,
                data: tempData
            }

        default: return state
    }
}