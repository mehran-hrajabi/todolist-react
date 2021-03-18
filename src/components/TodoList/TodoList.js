import React from 'react';
import Todo from '../Todo/Todo';
import '../../assets/sass/components/TodoList/_todoList.scss';

const TodoList = ({todos, setTodos, type}) => {
    return(
        <div className="list-container">
            {type==="pinned"? todos.map((task) => {
                if(task.priority === "PINNED"){
                    return(
                        <Todo
                            text={task.text}
                            key={task.id}
                            task={task}
                            todos={todos}
                            setTodos={setTodos}
                            type={type}
                        />                        
                    );
                }
            }) : null}
            {type==="high"? todos.map((task) => {
                if(task.priority === "HIGH"){
                    return(
                        <Todo
                            text={task.text}
                            key={task.id}
                            task={task}
                            todos={todos}
                            setTodos={setTodos}
                            type={type}
                        />                        
                    );
                }
            }) : null}
            {type==="mid"? todos.map((task) => {
                if(task.priority === "MID"){
                    return(
                        <Todo
                            text={task.text}
                            key={task.id}
                            task={task}
                            todos={todos}
                            setTodos={setTodos}
                            type={type}
                        />                        
                    );
                }
            }) : null}
            {type==="low"? todos.map((task) => {
                if(task.priority === "LOW"){
                    return(
                        <Todo
                            text={task.text}
                            key={task.id}
                            task={task}
                            todos={todos}
                            setTodos={setTodos}
                            type={type}
                        />                        
                    );
                }
            }) : null}
            {type==="done"? todos.map((task) => {
                if(task.priority === "DONE"){
                    return(
                        <Todo
                            text={task.text}
                            key={task.id}
                            task={task}
                            todos={todos}
                            setTodos={setTodos}
                            type={type}
                        />                        
                    );
                }
            }) : null}
        </div>
    );
}

export default TodoList;