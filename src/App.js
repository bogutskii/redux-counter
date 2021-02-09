import './App.css';
import {connect} from 'react-redux'

function App(props) {

    const deleteButtonHandler = (id) => {
        props.deleteCounter(id)
    }
    const addButtonCounter = (number, id) => {
        props.createCounter(number, id)
    }
    const plusMinusButtonHandler = (id, value) => {
        props.mathActions(id, value)
    }

    return (
        <div className="App">

            {props.counters.map(el =>
                <p>
                    <button onClick={() => minus(el.id)}> -1</button>
                    {el.number}
                    <button> +1</button>
                    &nbsp;
                    <button onClick={() => deleteButtonHandler(el.id)}>delete</button>
                </p>
            )}
            <button onClick={() => addButtonCounter(100, Math.random() * Math.random())}>add counter</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    counters: state.counters,

})

const mapDispatchToProps = (dispatch) => ({
    deleteCounter: (counterId) => dispatch({
        type: 'DELETE',
        payload: {counterId: counterId}
    }),
    createCounter: (number, idx) => dispatch({
        type: 'ADD_COUNTER',
        payload: {number: 100, id: idx}
    }),
    mathActions: (id, value) => dispatch({
        type: 'MATH_ACTION',
        payload: {
            id: id, value: value
        }
    })

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
