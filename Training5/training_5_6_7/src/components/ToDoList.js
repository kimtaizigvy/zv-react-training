import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Checkbox } from 'antd'

import ToDoItem from './ToDoItem';
import { TodoStyle } from '../styles/TodoList'
import {
    showCompleted,
    getTodos
} from '../redux/action/TodoAction'
import { getVisibleTodos } from '../redux/reducer/TodoReducer'

class ToDoList extends Component {

    componentWillMount() {
        this.props.getTodos()
    }

    onCompleteChecked = (e) => {
        this.props.showCompleted(e.target.checked)
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', marginRight: 20 }}>
                        <Checkbox
                            onChange={this.onCompleteChecked}
                            checked={this.props.completedToggle}
                        />
                        <p style={{ color: '#ffff', marginLeft: 5 }}>Completed</p>
                    </div>
                </div>
                <div style={TodoStyle.todoListContainer}>
                    <div
                        style={{
                            display: 'block',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: 600,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            borderRadius: 3,
                            borderColor: '#e0e0e0'
                        }}>

                        <div style={TodoStyle.todoListTitleWrapper}>
                            <p style={{ fontSize: 20, fontWeight: 700 }}>Todo List</p>
                        </div>

                        {
                            this.props.todoList.length > 0
                                ? this.props.todoList.map(todo => {
                                    return (
                                        <ToDoItem todo={todo} key={todo.id} />
                                    )
                                }) : (
                                    <p>Nothing to do here...</p>
                                )
                        }

                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoList: getVisibleTodos(state),
        completedToggle: state.Todoreducer.completedToggle
    };
}

export default connect(mapStateToProps, {
    showCompleted,
    getTodos
})(ToDoList)