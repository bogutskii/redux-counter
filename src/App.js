import './App.css';
import {connect} from 'react-redux'

function App(props) {

    const deleteButtonHandler = (id) => {
        props.deleteCounter(id)
    }

    return (
        <div className="App">

            {props.counters.map(el=>
                <p>{el.number}
                    <button onClick={() => deleteButtonHandler(el.id)}> delete</button>
                </p>
            )}

        </div>
    );
}

const mapStateToProps = (state) => ({
    counters: state.counters,

})

const mapDispatchToProps = (dispatch) => ({
    deleteCounter: (counterId) => dispatch({
        type: 'DELETE',
        payload: {counterId:counterId}
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
