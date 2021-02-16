import './App.css';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import ModalWindow from './ModalWindow/ModalWindow'

function App(props) {

    const {modal, changeCreateModal} = props


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
                <div key={uuidv4()}>
                <p>
                    <button onClick={() => plusMinusButtonHandler(el.id, -1)}> -1</button>
                    {el.number}
                    <button onClick={() => plusMinusButtonHandler(el.id, 1)}> +1</button>
                    &nbsp;
                    <button onClick={() => deleteButtonHandler(el.id)}>delete</button>
                    {modal.modalsIsOpen && <ModalWindow/>}
                </p>
                </div>
            )}
            <button onClick={() => addButtonCounter(100, uuidv4())}>add counter</button>
            <button onClick={() => changeCreateModal(true)}>add redux count</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    counters: state.counters,
    modal: state.modals,
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
    }),
    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
