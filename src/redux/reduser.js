const initialState = {
    counters: [
        {id: 1, number: 10},
        {id: 2, number: 20},
        {id: 3, number: 30}
    ]
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE':
            const newCounters = state.counters.filter(el=>
                el.id !==action.payload.counterId)

            return {...state, counters: newCounters}



        default:
            return state
    }
}
export default counter;