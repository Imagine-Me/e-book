const initialState = {
    data: [{
        id: 1,
        title: "This is the title",
        text: "<h1>Hello there</h1>"
    }]
}


export default function (state = initialState, action) {
    switch (action) {
        default: return state
    }
}