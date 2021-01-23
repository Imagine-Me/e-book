const initialState = {
    data: [{
        id: 1,
        title: "This is the title",
        text: "Hello there"
    }]
}


export default function (state = initialState, action) {
    switch (action) {
        default: return state
    }
}