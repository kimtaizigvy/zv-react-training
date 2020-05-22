import React, { Component } from 'react';
import { Input } from 'antd'
import { TagsOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { addTodo } from '../redux/action/TodoAction';
import { TodoStyle } from '../styles/TodoList'

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoContent: ''
        }
        this.onContentInputChanged = this.onContentInputChanged.bind(this);
    }

    onContentInputChanged = (e) => {
        this.setState({
            todoContent: e.target.value
        })
    }

    onAddButtonPressed = () => {
        if (this.state.todoContent.trim().length > 0) {
            this.setState({
                todoContent: ''
            })
            this.props.addTodo(this.state.todoContent)
        }
    }

    render() {
        return (
            <div style={TodoStyle.todoFormWrapper}>
                <div style={TodoStyle.todoInputWraper}>
                    <TagsOutlined size={20} style={{ marginLeft: 5 }} />
                    <Input
                        style={TodoStyle.todoInput}
                        size="large"
                        placeholder="What need to be done...."
                        value={this.state.todoContent}
                        onChange={this.onContentInputChanged}
                    />
                </div>
                <button
                    style={TodoStyle.addTodoButton}
                    onClick={this.onAddButtonPressed}
                >
                    Add
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, {
    addTodo
})(ToDoForm)