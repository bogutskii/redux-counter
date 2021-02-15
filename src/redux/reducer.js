const initialState = {
    counters: [
        {id: 1, number: 10},
        {id: 2, number: 20},
        {id: 3, number: 30}
    ],
    modals: {
        modalsIsOpen: false
    }

}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE':
            const newCounters = state.counters.filter(el =>
                el.id !== action.payload.counterId)
            return {...state, counters: newCounters}

        case 'ADD_COUNTER':
            return {
                ...state, counters: [...state.counters, {number: action.payload.number, id: action.payload.id}]
            }
        case 'MATH_ACTION':
            const updatedCounters = state.counters.map(el => el.id === action.payload.id ? {
                ...el,
                number: el.number + action.payload.value
            } : el)
            return {...state, counters: updatedCounters}
        case 'CHANG_CREAT_MODAL':
            return {
                ...state, modals: {...state.modals, modalsIsOpen: action.payload.value}
            }
        default:
            return state
    }
}
export default counter;