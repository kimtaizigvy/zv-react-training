import React from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { TodoStyle } from '../styles/TodoList'

export default class ToDoPage extends React.Component {
    render() {
        return (
            <div style={TodoStyle.todoPageContainer}>
                <div style={TodoStyle.todoListWrapper}>
                    <ToDoForm />
                    <ToDoList />
                </div>
            </div>
        );
    }
}