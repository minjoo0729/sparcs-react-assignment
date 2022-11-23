import React from 'react';
import './TodoForm.css';

const TodoForm =({id, title, content, due, importance, deleteHandler})=>{

    return(
        <>
            <div className="todolist">
                <p><b>Todo #{id}</b></p>
                <p>Title: {title}</p>
                <p>Content: {content}</p>
                <p>Due Date: ~{due}</p>
                <p>Importance: {importance}</p>
                <div className='del_button'>
                    <button type="button" id={id} onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </>
    );
};

export default TodoForm;