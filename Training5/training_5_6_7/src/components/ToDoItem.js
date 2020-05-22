import React, { Component } from 'react';
import {
    Checkbox,
    Button
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import {
    removeTodo,
    toggleTodo
} from '../redux/action/TodoAction';
import { TodoStyle } from '../styles/TodoList';

class ToDoItem extends Component {

    onTodoBoxChecked = (e) => {
        this.props.toggleTodo(this.props.todo.id, e.target.checked)
    }

    onRemoveTodoPress(id) {
        this.props.removeTodo(id)
    }

    render() {
        return (
            <div style={TodoStyle.todoItemWrapper}>
                <div style={TodoStyle.checkBoxWrapper}>
                    <Checkbox
                        onChange={this.onTodoBoxChecked}
                        size="large"
                        style={{ marginBottom: 10 }}
                        checked={this.props.todo.completed}
                    />
                </div>
                <div style={TodoStyle.contentWrapper}>
                    <p style={{ fontSize: 15, marginBottom: 12, textDecorationLine: this.props.todo.completed ? "line-through" : "none" }}>
                        {this.props.todo.name}
                    </p>
                </div>
                <div style={TodoStyle.removeButtonWrapper}>
                    <Button
                        style={TodoStyle.removeButton}
                        onClick={() => this.onRemoveTodoPress(this.props.todo.id)}
                    >
                        <DeleteOutlined style={{ color: "#F32013" }} />
                    </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps, {
    removeTodo,
    toggleTodo
})(ToDoItem)