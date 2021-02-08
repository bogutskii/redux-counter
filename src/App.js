import './App.css';
import {connect} from 'react-redux'

function App(props) {

    const deleteButtonHandler = (id) => {
        props.deleteCounter(id)
    }
    const addButtonCounter = (number, id) => {
        props.createCounter(number, id)
    }

    return (
        <div className="App">

            {props.counters.map(el =>
                <p>{el.number}
                    &nbsp;
                    <button onClick={() => deleteButtonHandler(el.id)}>delete</button>
                </p>
            )}
            <button onClick={()=> addButtonCounter(100,Math.random()*Math.random())}>add counter</button>
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
        payload: { number: 100 , id: idx }
})

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
